"use client";

import React, { useState, useMemo } from "react";
import { theme } from "@/styles/theme";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  bookingDate: string;
  totalCharge: number;
  paymentMethod: "Full" | "50%" | "COD";
  bookingStatus: "pending" | "accepted" | "declined" | "driver_sent";
  driverDetails?: DriverDetails;
}

interface DriverDetails {
  name: string;
  whatsapp: string;
  vehicleNumber: string;
}

const mockUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    bookingDate: "2024-01-15",
    totalCharge: 2500,
    paymentMethod: "Full",
    bookingStatus: "pending"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+91 98765 43211",
    bookingDate: "2024-01-14",
    totalCharge: 1800,
    paymentMethod: "50%",
    bookingStatus: "accepted"
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    phone: "+91 98765 43212",
    bookingDate: "2024-01-13",
    totalCharge: 3200,
    paymentMethod: "COD",
    bookingStatus: "driver_sent",
    driverDetails: {
      name: "Rajesh Kumar",
      whatsapp: "+91 98765 12345",
      vehicleNumber: "GJ-01-AB-1234"
    }
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    phone: "+91 98765 43213",
    bookingDate: "2024-01-12",
    totalCharge: 1500,
    paymentMethod: "Full",
    bookingStatus: "declined"
  },
  {
    id: 5,
    name: "David Brown",
    email: "david.brown@example.com",
    phone: "+91 98765 43214",
    bookingDate: "2024-01-11",
    totalCharge: 2800,
    paymentMethod: "50%",
    bookingStatus: "pending"
  }
];

export default function UserDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [paymentFilter, setPaymentFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<keyof User>("bookingDate");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [driverDetails, setDriverDetails] = useState<DriverDetails>({
    name: "",
    whatsapp: "",
    vehicleNumber: ""
  });
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const filteredUsers = useMemo(() => {
    let filtered = mockUsers.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.phone.includes(searchTerm);
      const matchesPayment = paymentFilter === "all" || user.paymentMethod === paymentFilter;
      return matchesSearch && matchesPayment;
    });

    filtered.sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      
      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortOrder === "asc" 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }
      
      return 0;
    });

    return filtered;
  }, [searchTerm, paymentFilter, sortBy, sortOrder]);

  const getPaymentBadge = (payment: string) => {
    switch (payment) {
      case "Full":
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Full</span>;
      case "50%":
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">50%</span>;
      case "COD":
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">COD</span>;
      default:
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">{payment}</span>;
    }
  };

  const handleAcceptBooking = (userId: number) => {
    // Update user status to accepted
    const userIndex = mockUsers.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
      mockUsers[userIndex].bookingStatus = "accepted";
    }
  };

  const handleDeclineBooking = (userId: number) => {
    // Update user status to declined
    const userIndex = mockUsers.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
      mockUsers[userIndex].bookingStatus = "declined";
    }
  };

  const handleSendDriverDetails = (userId: number) => {
    setSelectedUserId(userId);
    setIsDriverModalOpen(true);
  };

  const handleSubmitDriverDetails = () => {
    if (selectedUserId) {
      // Update user status to driver_sent and save driver details
      const userIndex = mockUsers.findIndex(user => user.id === selectedUserId);
      if (userIndex !== -1) {
        mockUsers[userIndex].bookingStatus = "driver_sent";
        mockUsers[userIndex].driverDetails = {
          name: driverDetails.name,
          whatsapp: driverDetails.whatsapp,
          vehicleNumber: driverDetails.vehicleNumber
        };
      }
      setIsDriverModalOpen(false);
      setDriverDetails({ name: "", whatsapp: "", vehicleNumber: "" });
      setSelectedUserId(null);
    }
  };

  const handleCloseModal = () => {
    setIsDriverModalOpen(false);
    setDriverDetails({ name: "", whatsapp: "", vehicleNumber: "" });
    setSelectedUserId(null);
  };

  const handleViewUser = (user: User) => {
    setSelectedUser(user);
    setIsViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedUser(null);
  };

  const handleSendEmail = (email: string) => {
    // Open default email client
    window.open(`mailto:${email}?subject=Booking Confirmation&body=Thank you for your booking with Penta Cab.`, '_blank');
  };

  const handleSendWhatsApp = (phone: string) => {
    // Open WhatsApp with pre-filled message
    const message = encodeURIComponent("Thank you for your booking with Penta Cab. Your booking has been confirmed.");
    window.open(`https://wa.me/${phone.replace(/\s/g, '')}?text=${message}`, '_blank');
  };

  const handleSendInvoice = (user: User) => {
    // Generate and send invoice
    const invoiceData = {
      customerName: user.name,
      email: user.email,
      phone: user.phone,
      bookingDate: user.bookingDate,
      totalCharge: user.totalCharge,
      paymentMethod: user.paymentMethod
    };
    
    // Here you would typically send this to your backend
    console.log("Sending invoice:", invoiceData);
    alert("Invoice sent successfully!");
  };

  const renderActionButtons = (user: User) => {
    switch (user.bookingStatus) {
      case "pending":
        return (
          <div className="flex space-x-2">
            <button
              onClick={() => handleAcceptBooking(user.id)}
              className="px-3 py-1 text-xs font-semibold bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Accept
            </button>
            <button
              onClick={() => handleDeclineBooking(user.id)}
              className="px-3 py-1 text-xs font-semibold bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Decline
            </button>
          </div>
        );
      case "accepted":
        return (
          <button
            onClick={() => handleSendDriverDetails(user.id)}
            className="px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Send Driver Details
          </button>
        );
      case "driver_sent":
        return (
          <span className="px-3 py-1 text-xs font-semibold bg-gray-500 text-white rounded">
            Driver details already sent
          </span>
        );
      case "declined":
        return (
          <span className="px-3 py-1 text-xs font-semibold bg-red-500 text-white rounded">
            Booking declined
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">User Dashboard</h2>
          <p className="text-gray-400 text-sm sm:text-base mt-1">Manage user bookings and payments</p>
        </div>
        <div className="text-sm sm:text-base text-gray-400">
          Total Users: <span className="font-semibold text-white">{filteredUsers.length}</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>
        <div className="sm:w-48">
          <select
            value={paymentFilter}
            onChange={(e) => setPaymentFilter(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          >
            <option value="all">All Payment Methods</option>
            <option value="Full">Full Payment</option>
            <option value="50%">50% Payment</option>
            <option value="COD">COD</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  User Details
                </th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  Booking Date
                </th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  Total Charge
                </th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  Payment Details
                </th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  View
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-700 transition-colors">
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center">
                          <span className="text-sm font-bold text-black">
                            {user.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 min-w-0 flex-1">
                        <div className="text-sm font-medium text-white truncate">{user.name}</div>
                        <div className="text-sm text-gray-400 truncate">{user.email}</div>
                        <div className="text-sm text-gray-400 truncate">{user.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-300">
                    {new Date(user.bookingDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-300">
                    ₹{user.totalCharge.toLocaleString()}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-300">
                    {getPaymentBadge(user.paymentMethod)}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-300">
                    {renderActionButtons(user)}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-300">
                    <button
                      onClick={() => handleViewUser(user)}
                      className="px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg">No users found</div>
          <div className="text-gray-500 text-sm mt-2">Try adjusting your search or filter criteria</div>
        </div>
      )}

      {/* Driver Details Modal */}
      {isDriverModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Send Driver Details</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Driver Name
                </label>
                <input
                  type="text"
                  value={driverDetails.name}
                  onChange={(e) => setDriverDetails({
                    ...driverDetails,
                    name: e.target.value.replace(/[^a-zA-Z\s]/g, '')
                  })}
                  maxLength={50}
                  placeholder="Enter driver name (letters only)"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  value={driverDetails.whatsapp}
                  onChange={(e) => setDriverDetails({
                    ...driverDetails,
                    whatsapp: e.target.value.replace(/[^0-9+\-\s]/g, '')
                  })}
                  maxLength={15}
                  pattern="[0-9+\-\s]+"
                  placeholder="Enter WhatsApp number (e.g., +91 98765 43210)"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Vehicle Number
                </label>
                <input
                  type="text"
                  value={driverDetails.vehicleNumber}
                  onChange={(e) => setDriverDetails({
                    ...driverDetails,
                    vehicleNumber: e.target.value.replace(/[^A-Z0-9\s\-]/g, '').toUpperCase()
                  })}
                  maxLength={15}
                  placeholder="Enter vehicle number (e.g., GJ-01-AB-1234)"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitDriverDetails}
                className="px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Send Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* User Details View Modal */}
      {isViewModalOpen && selectedUser && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">User Details</h3>
              <button
                onClick={handleCloseViewModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <div className="text-white font-medium">{selectedUser.name}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <div className="text-white font-medium">{selectedUser.email}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <div className="text-white font-medium">{selectedUser.phone}</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Booking Date</label>
                  <div className="text-white font-medium">
                    {new Date(selectedUser.bookingDate).toLocaleDateString()}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Total Charge</label>
                  <div className="text-white font-medium">₹{selectedUser.totalCharge.toLocaleString()}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Payment Method</label>
                  <div className="mt-1">{getPaymentBadge(selectedUser.paymentMethod)}</div>
                </div>
              </div>
            </div>

            {/* Driver Details Section */}
            <div className="mb-6 p-4 bg-gray-700 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Driver Information</h4>
              {selectedUser.driverDetails ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">Driver Name</label>
                    <div className="text-white font-medium">{selectedUser.driverDetails.name}</div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">WhatsApp</label>
                    <div className="text-white font-medium">{selectedUser.driverDetails.whatsapp}</div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">Vehicle Number</label>
                    <div className="text-white font-medium">{selectedUser.driverDetails.vehicleNumber}</div>
                  </div>
                </div>
              ) : (
                <div className="text-gray-400 text-sm italic">
                  Driver not assigned yet
                </div>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleSendEmail(selectedUser.email)}
                className="flex-1 px-4 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <span>📧</span>
                <span>Send Email</span>
              </button>
              <button
                onClick={() => handleSendWhatsApp(selectedUser.phone)}
                className="flex-1 px-4 py-3 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
              >
                <span>📱</span>
                <span>Send WhatsApp</span>
              </button>
              <button
                onClick={() => handleSendInvoice(selectedUser)}
                className="flex-1 px-4 py-3 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-colors flex items-center justify-center space-x-2"
              >
                <span>📄</span>
                <span>Send Invoice</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 