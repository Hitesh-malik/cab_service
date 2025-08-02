"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { theme } from "@/styles/theme";
import { ThemedSelect } from "@/components/UI/ThemedSelect";
import { ThemedInput } from "@/components/UI/ThemedInput";
import { ThemedDatePicker } from "@/components/UI/ThemedDatePicker";
import { ThemedTimePicker } from "@/components/UI/ThemedTimePicker";
import { ThemedButton } from "@/components/UI/ThemedButton";

const UserLocalRide = () => {
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    city: "",
    package: "",
    date: "",
    time: "",
    name: "",
    phoneNumber: "",
  });
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [travellerInfo, setTravellerInfo] = useState({
    name: "",
    mobile: "",
    email: "",
    pickupAddress: "",
    dropAddress: "",
    remark: "",
    gst: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResults([]);
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/local-ride/search",
        {
          city: formData.city.toLowerCase(),
          package: formData.package,
        }
      );

      if (response.data.cars.length === 0) {
        setError("No available cars for this selection.");
      } else {
        setResults(response.data.cars);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/available-cities")
      .then((res) => res.json())
      .then((data) => setCities(data.cities))
      .catch((err) => console.error(err));
  }, []);

  const handleTravellerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTravellerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCarSelect = (car: any) => {
    setSelectedCar(car);
  };

  const handleFinalSubmit = async () => {
    if (!travellerInfo.email || !travellerInfo.name || !travellerInfo.mobile) {
      return alert("Please fill all required traveller info.");
    }

    const routeSummary = `${formData.city} | ${formData.package} | ${formData.date} ${formData.time}`;

    try {
      await axios.post("http://localhost:5000/send-local-email", {
        email: travellerInfo.email,
        route: routeSummary,
        car: selectedCar,
        traveller: travellerInfo,
      });

      alert("Email sent successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to send email.");
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 px-3 sm:px-0 max-w-md mx-auto sm:max-w-none">
      {/* Header Section */}
      <div className="text-center space-y-3 sm:space-y-4">
        <h3
          className="font-bold text-lg sm:text-xl lg:text-2xl px-2 leading-tight"
          style={{
            color: theme.colors.text.primary,
            fontFamily: theme.typography.fontFamily.sans.join(", "),
            fontWeight: theme.typography.fontWeight.bold,
          }}
        >
          HOURLY RENTALS WITHIN THE CITY
        </h3>
      </div>

      {!selectedCar && (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* City Selection */}
          <div className="space-y-2">
            <label
              className="block text-sm sm:text-base font-medium px-1"
              style={{
                color: theme.colors.text.secondary,
                fontFamily: theme.typography.fontFamily.sans.join(", "),
                fontWeight: theme.typography.fontWeight.medium,
              }}
            >
              CITY
            </label>
            <ThemedSelect
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
              options={cities.map((city: string) => ({
                value: city,
                label: city,
              }))}
              placeholder="Select City"
            />
          </div>

          {/* Package Selection */}
          <div className="space-y-2">
            <label
              className="block text-sm sm:text-base font-medium px-1"
              style={{
                color: theme.colors.text.secondary,
                fontFamily: theme.typography.fontFamily.sans.join(", "),
                fontWeight: theme.typography.fontWeight.medium,
              }}
            >
              PACKAGE
            </label>
            <ThemedSelect
              value={formData.package}
              onChange={(e) => handleChange("package", e.target.value)}
              options={[
                { value: "4hr/40km", label: "4hr/40km" },
                { value: "8hr/80km", label: "8hr/80km" },
                { value: "12hr/120km", label: "12hr/120km" },
              ]}
              placeholder="Select Package"
            />
          </div>

          {/* Date and Time Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-2">
              <label
                className="block text-sm sm:text-base font-medium px-1"
                style={{
                  color: theme.colors.text.secondary,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                  fontWeight: theme.typography.fontWeight.medium,
                }}
              >
                DATE
              </label>
              <ThemedDatePicker
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label
                className="block text-sm sm:text-base font-medium px-1"
                style={{
                  color: theme.colors.text.secondary,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                  fontWeight: theme.typography.fontWeight.medium,
                }}
              >
                PICKUP TIME
              </label>
              <ThemedTimePicker
                value={formData.time}
                onChange={(e) => handleChange("time", e.target.value)}
              />
            </div>
          </div>

          {/* Customer Details Section - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-2">
              <label
                className="block text-sm sm:text-base font-medium px-1"
                style={{
                  color: theme.colors.text.secondary,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                  fontWeight: theme.typography.fontWeight.medium,
                }}
              >
                NAME
              </label>
              <ThemedInput
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label
                className="block text-sm sm:text-base font-medium px-1"
                style={{
                  color: theme.colors.text.secondary,
                  fontFamily: theme.typography.fontFamily.sans.join(", "),
                  fontWeight: theme.typography.fontWeight.medium,
                }}
              >
                PHONE NUMBER
              </label>
              <ThemedInput
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
              />
            </div>
          </div>

          <ThemedButton
            onClick={() => handleSubmit({} as React.FormEvent)}
            disabled={loading}
            loading={loading}
            className="w-full"
          >
            Search Cabs
          </ThemedButton>
        </form>
      )}

      {/* Show Results */}
      {error && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {results.length > 0 && !selectedCar && (
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Available Cars:</h3>
          <div className="space-y-2">
            {results.map((car: any) => (
              <div
                key={car._id}
                className="p-4 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors"
                style={{ borderColor: theme.colors.border.goldLight }}
                onClick={() => handleCarSelect(car)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">
                    {car.type.toUpperCase()}
                  </span>
                  <span
                    className="text-lg font-bold"
                    style={{ color: theme.colors.accent.gold }}
                  >
                    ₹{car.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedCar && (
        <>
          <div
            className="p-4 rounded-lg border"
            style={{
              backgroundColor: theme.colors.background.secondary,
              borderColor: theme.colors.border.goldLight,
            }}
          >
            <h3 className="font-semibold text-lg mb-3">🧾 Booking Summary</h3>
            <div className="space-y-2 text-sm">
              <p>
                <strong>City:</strong> {formData.city}
              </p>
              <p>
                <strong>Package:</strong> {formData.package}
              </p>
              <p>
                <strong>Date & Time:</strong> {formData.date} at {formData.time}
              </p>
              <p>
                <strong>Car Selected:</strong> {selectedCar.type.toUpperCase()}{" "}
                - ₹{selectedCar.price}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">👤 Traveller Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <ThemedInput
                placeholder="Name *"
                value={travellerInfo.name}
                onChange={handleTravellerChange}
              />
              <ThemedInput
                placeholder="Mobile *"
                value={travellerInfo.mobile}
                onChange={handleTravellerChange}
              />
            </div>
            <ThemedInput
              placeholder="Email *"
              value={travellerInfo.email}
              onChange={handleTravellerChange}
            />
            <ThemedInput
              placeholder="Pickup Address"
              value={travellerInfo.pickupAddress}
              onChange={handleTravellerChange}
            />
            <ThemedInput
              placeholder="Drop Address"
              value={travellerInfo.dropAddress}
              onChange={handleTravellerChange}
            />
            <ThemedInput
              placeholder="Remark for Driver"
              value={travellerInfo.remark}
              onChange={handleTravellerChange}
            />
            <ThemedInput
              placeholder="GST Details (optional)"
              value={travellerInfo.gst}
              onChange={handleTravellerChange}
            />

            <ThemedButton onClick={handleFinalSubmit} className="w-full">
              🚀 Proceed
            </ThemedButton>
          </div>
        </>
      )}
    </div>
  );
};

export default UserLocalRide;
