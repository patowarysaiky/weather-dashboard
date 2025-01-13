import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss']
})
export class WeatherDashboardComponent {
  currentWeather: any;
  forecastData: any[] = [];  
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  fetchWeather(location: string) {
    this.errorMessage = '';
    const isPinCode = /^\d{6}$/.test(location); // Check for a Indian PIN code
  
    // Use a mapping for PIN codes to cities as it is not directly support by api
    const pinToCityMap: { [key: string]: string } = {
      '110001':'New Delhi',
      '400001': 'Mumbai',
      '700001': 'Kolkata',
      '600001': 'Chennai',
      '560001': 'Bangalore',
      '500001': 'Hyderabad',
      '380001': 'Ahmedabad',
      '411001': 'Pune',
      '302001': 'Jaipur',
      '226001': 'Lucknow',
      '800001': 'Patna',
      '462001': 'Bhopal',
      '160001': 'Chandigarh',
      '781001': 'Guwahati',
      '695001': 'Thiruvananthapuram',
      '452001': 'Indore',
      '395001': 'Surat',
      '390001': 'Vadodara',
      '641001': 'Coimbatore',
      '530001': 'Visakhapatnam',
      '625001': 'Madurai',
      '422001': 'Nashik',
      '520001': 'Vijayawada',
      '282001': 'Agra',
      '751001': 'Bhubaneswar',
      '834001': 'Ranchi',
      '793001': 'Shillong',
      '682001': 'Kochi',
      '570001': 'Mysore',
      '440001': 'Nagpur',
      '180001': 'Jammu',
      '492001': 'Raipur',
      '208001': 'Kanpur',
      '442401': 'Chandrapur',
      '474001': 'Gwalior',
      '171001': 'Shimla',
      '143001': 'Amritsar',
      '575001': 'Mangalore',
      '201301': 'Noida',
      '121001': 'Faridabad',
      '250001': 'Meerut',
      '202001': 'Aligarh',
      '627001': 'Tirunelveli'
    };
  
    if (isPinCode) {
      if (pinToCityMap[location]) {
        location = pinToCityMap[location]; // Replace PIN code with city name
        console.log('Mapped PIN code to city:', location);
      } else {
        console.warn('PIN code not found in the mapping. Cannot fetch weather data.');
        this.errorMessage = 'PIN code is not recognized. Please enter a valid city or mapped PIN code.';
        return;
      }
    }
  
    console.log('Fetching weather data for:', location);
  
    // Fetch current weather
    this.weatherService.getCurrentWeather(location).subscribe({
      next: (data) => {
        if (data && data.location) {
          console.log('Returned Location:', data.location.name);
          this.currentWeather = data;
        } else {
          console.warn('API response does not include a valid location.');
          this.errorMessage = 'Could not find weather data for the entered location.';
        }
      },
      error: (error) => {
        console.error('Error fetching current weather:', error);
        this.errorMessage = 'Error fetching current weather. Please try again.';
      }
    });
  
    // Fetch forecast data
    this.weatherService.getForecast(location).subscribe({
      next: (data) => {
        if (data && data.forecast && data.forecast.forecastday) {
          this.forecastData = data.forecast.forecastday;
          console.log('Forecast Data:', this.forecastData);
        } else {
          this.errorMessage = 'Could not find forecast data for the entered location.';
        }
      },
      error: (error) => {
        console.error('Error fetching forecast data:', error);
        this.errorMessage = 'Error fetching forecast data. Please try again.';
      }
    });
  }  
}
