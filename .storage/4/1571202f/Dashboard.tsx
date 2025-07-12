import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Cloud, 
  Sun, 
  Droplets, 
  TrendingUp, 
  TrendingDown, 
  Leaf, 
  DollarSign,
  Thermometer,
  Wind,
  Eye,
  Calendar,
  MapPin,
  AlertTriangle
} from 'lucide-react';

export default function Dashboard() {
  const currentWeather = {
    temperature: 28,
    humidity: 65,
    windSpeed: 12,
    condition: 'Partly Cloudy',
    uvIndex: 6
  };

  const cropRecommendations = [
    { crop: 'Rice', suitability: 92, season: 'Kharif', expectedYield: '4.2 tons/hectare' },
    { crop: 'Wheat', suitability: 78, season: 'Rabi', expectedYield: '3.8 tons/hectare' },
    { crop: 'Maize', suitability: 85, season: 'Both', expectedYield: '5.1 tons/hectare' }
  ];

  const marketPrices = [
    { crop: 'Rice', price: 2850, change: 5.2, trend: 'up' },
    { crop: 'Wheat', price: 2340, change: -2.1, trend: 'down' },
    { crop: 'Maize', price: 1980, change: 8.7, trend: 'up' },
    { crop: 'Cotton', price: 6200, change: 1.5, trend: 'up' }
  ];

  const sustainablePractices = [
    { practice: 'Drip Irrigation', waterSaving: '40%', status: 'Recommended' },
    { practice: 'Crop Rotation', benefit: 'Soil Health', status: 'Active' },
    { practice: 'Organic Fertilizers', benefit: 'Cost Reduction', status: 'Consider' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-green-800">AgriGuru Dashboard</h1>
            <p className="text-lg text-green-600 mt-2">Intelligent Agricultural Advisory System</p>
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Rajasthan, India</span>
              <Calendar className="w-4 h-4 ml-4" />
              <span>{new Date().toLocaleDateString()}</span>
            </div>
          </div>
          <Badge variant="outline" className="text-green-700 border-green-300">
            SDG2: Zero Hunger
          </Badge>
        </div>

        {/* Weather Alert */}
        <Alert className="border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800">
            <strong>Weather Alert:</strong> Light rain expected in 2 days. Consider adjusting irrigation schedule.
          </AlertDescription>
        </Alert>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="crops">Crop Recommendations</TabsTrigger>
            <TabsTrigger value="weather">Weather Forecast</TabsTrigger>
            <TabsTrigger value="market">Market Insights</TabsTrigger>
            <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Current Weather Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="w-5 h-5 text-yellow-500" />
                  Current Weather Conditions
                </CardTitle>
                <CardDescription>Real-time weather data for your location</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-red-500" />
                    <div>
                      <p className="text-2xl font-bold">{currentWeather.temperature}°C</p>
                      <p className="text-sm text-gray-600">Temperature</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-blue-500" />
                    <div>
                      <p className="text-2xl font-bold">{currentWeather.humidity}%</p>
                      <p className="text-sm text-gray-600">Humidity</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-2xl font-bold">{currentWeather.windSpeed}</p>
                      <p className="text-sm text-gray-600">km/h Wind</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cloud className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-lg font-semibold">{currentWeather.condition}</p>
                      <p className="text-sm text-gray-600">Condition</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-purple-500" />
                    <div>
                      <p className="text-2xl font-bold">{currentWeather.uvIndex}</p>
                      <p className="text-sm text-gray-600">UV Index</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-green-600">12</p>
                      <p className="text-sm text-gray-600">Active Crops</p>
                    </div>
                    <Leaf className="w-8 h-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">847</p>
                      <p className="text-sm text-gray-600">Hectares Monitored</p>
                    </div>
                    <MapPin className="w-8 h-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-purple-600">94%</p>
                      <p className="text-sm text-gray-600">Prediction Accuracy</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-orange-600">₹2.4L</p>
                      <p className="text-sm text-gray-600">Est. Monthly Revenue</p>
                    </div>
                    <DollarSign className="w-8 h-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Crop Recommendations Tab */}
          <TabsContent value="crops" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Crop Recommendations</CardTitle>
                <CardDescription>Based on soil data, climate conditions, and market analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cropRecommendations.map((crop, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{crop.crop}</h3>
                        <Badge variant={crop.suitability > 85 ? "default" : "secondary"}>
                          {crop.suitability}% Suitable
                        </Badge>
                      </div>
                      <Progress value={crop.suitability} className="mb-2" />
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Season: </span>
                          <span className="font-medium">{crop.season}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Expected Yield: </span>
                          <span className="font-medium">{crop.expectedYield}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Weather Tab */}
          <TabsContent value="weather" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>7-Day Weather Forecast</CardTitle>
                <CardDescription>Plan your farming activities with accurate weather predictions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                  {Array.from({ length: 7 }, (_, i) => {
                    const date = new Date();
                    date.setDate(date.getDate() + i);
                    const temps = [28, 29, 26, 24, 27, 30, 32];
                    const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Rainy', 'Sunny', 'Hot', 'Hot'];
                    
                    return (
                      <div key={i} className="text-center p-4 border rounded-lg">
                        <p className="text-sm font-medium">{date.toLocaleDateString('en', { weekday: 'short' })}</p>
                        <p className="text-xs text-gray-600">{date.toLocaleDateString('en', { month: 'short', day: 'numeric' })}</p>
                        <div className="my-2">
                          {conditions[i] === 'Sunny' && <Sun className="w-8 h-8 text-yellow-500 mx-auto" />}
                          {conditions[i] === 'Cloudy' && <Cloud className="w-8 h-8 text-gray-500 mx-auto" />}
                          {conditions[i] === 'Rainy' && <Droplets className="w-8 h-8 text-blue-500 mx-auto" />}
                          {conditions[i] === 'Hot' && <Thermometer className="w-8 h-8 text-red-500 mx-auto" />}
                        </div>
                        <p className="text-lg font-bold">{temps[i]}°</p>
                        <p className="text-xs text-gray-600">{conditions[i]}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Market Tab */}
          <TabsContent value="market" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Market Price Insights</CardTitle>
                <CardDescription>Current market rates and price trends for major crops</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketPrices.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="text-lg font-semibold">{item.crop}</h3>
                        <p className="text-2xl font-bold text-green-600">₹{item.price.toLocaleString()}/quintal</p>
                      </div>
                      <div className="text-right">
                        <div className={`flex items-center gap-1 ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          {item.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                          <span className="font-medium">{Math.abs(item.change)}%</span>
                        </div>
                        <p className="text-sm text-gray-600">vs last week</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sustainability Tab */}
          <TabsContent value="sustainability" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sustainable Farming Practices</CardTitle>
                <CardDescription>Recommendations for eco-friendly and cost-effective farming</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sustainablePractices.map((practice, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{practice.practice}</h3>
                        <Badge variant={practice.status === 'Recommended' ? 'default' : practice.status === 'Active' ? 'secondary' : 'outline'}>
                          {practice.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Benefit: </span>
                        {practice.waterSaving && `${practice.waterSaving} water saving`}
                        {practice.benefit && practice.benefit}
                      </div>
                      {practice.status === 'Recommended' && (
                        <Button className="mt-2" size="sm">
                          Learn More
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}