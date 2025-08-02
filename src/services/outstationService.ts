import api from '@/config/axios';

export interface OutstationCity {
  id: string;
  name: string;
  state?: string;
  isActive?: boolean;
}

export interface OutstationCitiesResponse {
  cityMap: Record<string, string[]>;
  fromCities: string[];
}

export const outstationService = {
  async getAvailableCities(): Promise<OutstationCitiesResponse> {
    try {
      const response = await api.get<OutstationCitiesResponse>('/api/available-outstation-cities');
      return response.data;
    } catch (error) {
      console.error('Error fetching available outstation cities:', error);
      throw error;
    }
  }
}; 