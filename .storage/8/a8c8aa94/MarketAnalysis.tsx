import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  BarChart3, 
  Globe,
  Calendar,
  AlertTriangle,
  Target,
  Package,
  Truck
} from 'lucide-react';

export default function MarketAnalysis() {
  const marketData = [
    { 
      crop: 'Rice', 
      currentPrice: 2850, 
      lastWeekPrice: 2705,
      change: 5.4,
      trend: 'up',
      demand: 'High',
      supply: 'Medium',
      forecast: 'Bullish',
      bestSellTime: '2-3 weeks'
    },
    { 
      crop: 'Wheat', 
      currentPrice: 2340, 
      lastWeekPrice: 2390,
      change: -2.1,
      trend: 'down',
      demand: 'Medium',
      supply: 'High',
      forecast: 'Bearish',
      bestSellTime: 'Immediate'
    },
    { 
      crop: 'Maize', 
      currentPrice: 1980, 
      lastWeekPrice: 1820,
      change: 8.8,
      trend: 'up',
      demand: 'Very High',
      supply: 'Low',
      forecast: 'Very Bullish',
      bestSellTime: '1-2 months'
    },
    { 
      crop: 'Cotton', 
      currentPrice: 6200, 
      lastWeekPrice: 6105,
      change: 1.6,
      trend: 'up',
      demand: 'High',
      supply: 'Medium',
      forecast: 'Stable',
      bestSellTime: '3-4 weeks'
    }
  ];

  const regionalPrices = [
    { state: 'Punjab', crop: 'Rice', price: 2900, transport: 120 },
    { state: 'Haryana', crop: 'Rice', price: 2820, transport: 80 },
    { state: 'Uttar Pradesh', crop: 'Rice', price: 2750, transport: 150 },
    { state: 'Madhya Pradesh', crop: 'Rice', price: 2680, transport: 200 }
  ];

  const exportOpportunities = [
    { country: 'Bangladesh', crop: 'Rice', demand: '2.5M tons', price: '$420/ton', opportunity: 'High' },
    { country: 'Nepal', crop: 'Wheat', demand: '800K tons', price: '$380/ton', opportunity: 'Medium' },
    { country: 'UAE', crop: 'Cotton', demand: '1.2M tons', price: '$1.8K/ton', opportunity: 'Very High' }
  ];

  const getDemandColor = (demand: string) => {
    switch (demand.toLowerCase()) {
      case 'very high': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getForecastColor = (forecast: string) => {
    switch (forecast.toLowerCase()) {
      case 'very bullish': return 'bg-green-100 text-green-800';
      case 'bullish': return 'bg-green-100 text-green-700';
      case 'stable': return 'bg-blue-100 text-blue-800';
      case 'bearish': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-green-800">Market Analysis</h1>
            <p className="text-lg text-green-600 mt-2">Real-time market insights and price intelligence</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <BarChart3 className="w-4 h-4 mr-2" />
              Price Alerts
            </Button>
            <Button variant="outline" size="sm">
              <Target className="w-4 h-4 mr-2" />
              Set Targets
            </Button>
          </div>
        </div>

        <Tabs defaultValue="prices" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="prices">Current Prices</TabsTrigger>
            <TabsTrigger value="regional">Regional Markets</TabsTrigger>
            <TabsTrigger value="export">Export Opportunities</TabsTrigger>
            <TabsTrigger value="forecasts">Price Forecasts</TabsTrigger>
          </TabsList>

          {/* Current Prices Tab */}
          <TabsContent value="prices" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {marketData.map((item, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{item.crop}</CardTitle>
                      <Badge variant={item.trend === 'up' ? 'default' : 'destructive'}>
                        {item.trend === 'up' ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                        {Math.abs(item.change)}%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-3xl font-bold text-green-600">₹{item.currentPrice.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">per quintal</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-gray-500">Demand:</span>
                          <Badge className={`ml-1 text-xs ${getDemandColor(item.demand)}`}>
                            {item.demand}
                          </Badge>
                        </div>
                        <div>
                          <span className="text-gray-500">Supply:</span>
                          <Badge className={`ml-1 text-xs ${getDemandColor(item.supply)}`}>
                            {item.supply}
                          </Badge>
                        </div>
                      </div>

                      <div className="pt-2 border-t">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Best Sell Time:</span>
                          <span className="text-sm font-medium">{item.bestSellTime}</span>
                        </div>
                        <Badge className={`mt-2 ${getForecastColor(item.forecast)}`}>
                          {item.forecast}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Market Alerts */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-800">Market Opportunity</h4>
                    <p className="text-sm text-green-700">
                      Maize prices are up 8.8% this week with very high demand. 
                      Consider holding inventory for 1-2 months for maximum profit.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Regional Markets Tab */}
          <TabsContent value="regional" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-500" />
                  Regional Price Comparison
                </CardTitle>
                <CardDescription>Compare prices across different states and factor in transportation costs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {regionalPrices.map((region, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <div>
                          <h3 className="font-semibold text-lg">{region.state}</h3>
                          <p className="text-sm text-gray-600">{region.crop}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-green-600">₹{region.price}</p>
                          <p className="text-xs text-gray-600">per quintal</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-medium text-orange-600">₹{region.transport}</p>
                          <p className="text-xs text-gray-600">transport cost</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-bold text-blue-600">₹{region.price - region.transport}</p>
                          <p className="text-xs text-gray-600">net price</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Export Opportunities Tab */}
          <TabsContent value="export" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-purple-500" />
                  International Export Opportunities
                </CardTitle>
                <CardDescription>Explore global markets for your agricultural products</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {exportOpportunities.map((opportunity, index) => (
                    <Card key={index} className="border">
                      <CardContent className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                          <div>
                            <h3 className="font-semibold text-lg">{opportunity.country}</h3>
                            <p className="text-sm text-gray-600">{opportunity.crop}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-blue-600">{opportunity.demand}</p>
                            <p className="text-xs text-gray-600">demand</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-green-600">{opportunity.price}</p>
                            <p className="text-xs text-gray-600">export price</p>
                          </div>
                          <div className="text-center">
                            <Badge variant={
                              opportunity.opportunity === 'Very High' ? 'default' :
                              opportunity.opportunity === 'High' ? 'secondary' : 'outline'
                            }>
                              {opportunity.opportunity}
                            </Badge>
                          </div>
                          <div>
                            <Button size="sm" className="w-full">
                              <Package className="w-4 h-4 mr-2" />
                              Explore
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Forecasts Tab */}
          <TabsContent value="forecasts" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-indigo-500" />
                    30-Day Price Forecast
                  </CardTitle>
                  <CardDescription>AI-powered price predictions based on market trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {marketData.slice(0, 3).map((item, index) => {
                      const forecastPrices = [
                        item.currentPrice + (item.change > 0 ? 150 : -80),
                        item.currentPrice + (item.change > 0 ? 280 : -120),
                        item.currentPrice + (item.change > 0 ? 350 : -150)
                      ];
                      
                      return (
                        <div key={index} className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2">{item.crop}</h4>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="text-center">
                              <p className="text-gray-600">Week 1</p>
                              <p className="font-bold text-green-600">₹{forecastPrices[0]}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-gray-600">Week 2</p>
                              <p className="font-bold text-green-600">₹{forecastPrices[1]}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-gray-600">Week 4</p>
                              <p className="font-bold text-green-600">₹{forecastPrices[2]}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    Market Alerts & Recommendations
                  </CardTitle>
                  <CardDescription>Actionable insights for optimal selling decisions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4 py-2">
                      <h4 className="font-semibold text-green-700">Strong Buy Signal</h4>
                      <p className="text-sm text-gray-600">
                        Maize shows strong bullish momentum. Consider increasing production for next season.
                      </p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4 py-2">
                      <h4 className="font-semibold text-yellow-700">Hold Position</h4>
                      <p className="text-sm text-gray-600">
                        Rice prices stabilizing. Wait for optimal selling window in 2-3 weeks.
                      </p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4 py-2">
                      <h4 className="font-semibold text-red-700">Sell Recommendation</h4>
                      <p className="text-sm text-gray-600">
                        Wheat prices declining due to oversupply. Consider immediate sale.
                      </p>
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