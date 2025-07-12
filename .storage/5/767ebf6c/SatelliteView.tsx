import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Satellite, 
  Map, 
  Activity, 
  Droplets, 
  Thermometer,
  Leaf,
  AlertTriangle,
  TrendingUp,
  Eye,
  Download,
  RefreshCw
} from 'lucide-react';

export default function SatelliteView() {
  const fieldData = [
    { 
      fieldId: 'F001', 
      name: 'North Field', 
      area: '25 hectares', 
      crop: 'Rice', 
      health: 92, 
      irrigation: 'Optimal',
      lastUpdate: '2 hours ago'
    },
    { 
      fieldId: 'F002', 
      name: 'South Field', 
      area: '18 hectares', 
      crop: 'Wheat', 
      health: 78, 
      irrigation: 'Attention Needed',
      lastUpdate: '4 hours ago'
    },
    { 
      fieldId: 'F003', 
      name: 'East Field', 
      area: '32 hectares', 
      crop: 'Maize', 
      health: 85, 
      irrigation: 'Good',
      lastUpdate: '1 hour ago'
    }
  ];

  const sensorData = [
    { type: 'Soil Moisture', value: '68%', status: 'optimal', icon: Droplets },
    { type: 'Soil Temperature', value: '24°C', status: 'good', icon: Thermometer },
    { type: 'pH Level', value: '6.8', status: 'optimal', icon: Activity },
    { type: 'Nitrogen Level', value: 'Medium', status: 'attention', icon: Leaf }
  ];

  const getHealthColor = (health: number) => {
    if (health >= 85) return 'text-green-600';
    if (health >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getHealthBadge = (health: number) => {
    if (health >= 85) return { variant: 'default' as const, text: 'Excellent' };
    if (health >= 70) return { variant: 'secondary' as const, text: 'Good' };
    return { variant: 'destructive' as const, text: 'Needs Attention' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-green-800">Satellite & Sensor Data</h1>
            <p className="text-lg text-green-600 mt-2">Real-time field monitoring and analysis</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh Data
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        <Tabs defaultValue="satellite" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="satellite">Satellite Imagery</TabsTrigger>
            <TabsTrigger value="sensors">Sensor Network</TabsTrigger>
            <TabsTrigger value="analytics">Field Analytics</TabsTrigger>
          </TabsList>

          {/* Satellite Imagery Tab */}
          <TabsContent value="satellite" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Satellite className="w-5 h-5 text-blue-500" />
                  Satellite Imagery Analysis
                </CardTitle>
                <CardDescription>High-resolution satellite data updated every 3 days</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Simulated Satellite Image */}
                <div className="relative bg-gradient-to-br from-green-200 via-green-300 to-green-500 rounded-lg h-96 mb-6 overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                  <div className="absolute top-4 left-4 bg-white/90 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Map className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium">Field Overview</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      <p>Resolution: 10m/pixel</p>
                      <p>Captured: {new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  {/* Field Markers */}
                  <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-green-600 rounded-full border-2 border-white shadow-lg">
                    <div className="absolute -top-8 -left-6 bg-white rounded px-2 py-1 text-xs font-medium shadow">F001</div>
                  </div>
                  <div className="absolute top-2/3 left-1/2 w-4 h-4 bg-yellow-500 rounded-full border-2 border-white shadow-lg">
                    <div className="absolute -top-8 -left-6 bg-white rounded px-2 py-1 text-xs font-medium shadow">F002</div>
                  </div>
                  <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg">
                    <div className="absolute -top-8 -left-6 bg-white rounded px-2 py-1 text-xs font-medium shadow">F003</div>
                  </div>
                </div>

                {/* Field Health Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {fieldData.map((field, index) => (
                    <Card key={index} className="border">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{field.name}</h3>
                          <Badge {...getHealthBadge(field.health)}>
                            {getHealthBadge(field.health).text}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Health Score:</span>
                            <span className={`font-medium ${getHealthColor(field.health)}`}>
                              {field.health}%
                            </span>
                          </div>
                          <Progress value={field.health} className="h-2" />
                          <div className="text-xs text-gray-600">
                            <p>Area: {field.area}</p>
                            <p>Crop: {field.crop}</p>
                            <p>Updated: {field.lastUpdate}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sensor Network Tab */}
          <TabsContent value="sensors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-purple-500" />
                  IoT Sensor Network
                </CardTitle>
                <CardDescription>Real-time environmental monitoring across all fields</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {sensorData.map((sensor, index) => {
                    const IconComponent = sensor.icon;
                    return (
                      <Card key={index}>
                        <CardContent className="p-4 text-center">
                          <IconComponent className={`w-8 h-8 mx-auto mb-2 ${
                            sensor.status === 'optimal' ? 'text-green-500' : 
                            sensor.status === 'good' ? 'text-blue-500' : 'text-yellow-500'
                          }`} />
                          <p className="text-2xl font-bold">{sensor.value}</p>
                          <p className="text-sm text-gray-600">{sensor.type}</p>
                          <Badge 
                            variant={sensor.status === 'optimal' ? 'default' : 'secondary'}
                            className="mt-2"
                          >
                            {sensor.status}
                          </Badge>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Sensor Alerts */}
                <Card className="border-yellow-200 bg-yellow-50">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-800">Sensor Alert</h4>
                        <p className="text-sm text-yellow-700">
                          Nitrogen levels in East Field (F003) are below optimal range. 
                          Consider applying organic fertilizer in the next 3-5 days.
                        </p>
                        <Button size="sm" className="mt-2">
                          View Recommendations
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    Yield Prediction
                  </CardTitle>
                  <CardDescription>AI-powered yield forecasting based on current conditions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {fieldData.map((field, index) => {
                      const predictedYield = [4.2, 3.8, 5.1];
                      const yieldIncrease = [12, -5, 8];
                      return (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">{field.name} ({field.crop})</h4>
                            <Badge variant={yieldIncrease[index] > 0 ? 'default' : 'secondary'}>
                              {yieldIncrease[index] > 0 ? '+' : ''}{yieldIncrease[index]}%
                            </Badge>
                          </div>
                          <p className="text-2xl font-bold text-green-600">
                            {predictedYield[index]} tons/hectare
                          </p>
                          <p className="text-sm text-gray-600">Expected yield this season</p>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-blue-500" />
                    Field Monitoring Summary
                  </CardTitle>
                  <CardDescription>Key metrics and performance indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Average Field Health</span>
                      <span className="text-2xl font-bold text-green-600">85%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Water Usage Efficiency</span>
                      <span className="text-2xl font-bold text-blue-600">92%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Active Sensors</span>
                      <span className="text-2xl font-bold text-purple-600">24/25</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cost Savings (Monthly)</span>
                      <span className="text-2xl font-bold text-orange-600">₹45,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}