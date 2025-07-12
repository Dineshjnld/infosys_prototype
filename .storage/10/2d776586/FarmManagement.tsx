import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Tractor,
  Droplets,
  Scissors,
  Package,
  Calendar,
  DollarSign,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  Plus,
  Edit
} from 'lucide-react';

export default function FarmManagement() {
  const activities = [
    {
      id: 1,
      task: 'Irrigation - North Field',
      crop: 'Rice',
      status: 'in-progress',
      dueDate: '2025-07-12',
      priority: 'high',
      estimated: '2 hours',
      cost: 450
    },
    {
      id: 2,
      task: 'Fertilizer Application',
      crop: 'Wheat',
      status: 'pending',
      dueDate: '2025-07-13',
      priority: 'medium',
      estimated: '4 hours',
      cost: 2800
    },
    {
      id: 3,
      task: 'Pest Control Spray',
      crop: 'Maize',
      status: 'completed',
      dueDate: '2025-07-10',
      priority: 'high',
      estimated: '3 hours',
      cost: 1200
    },
    {
      id: 4,
      task: 'Soil Testing',
      crop: 'Cotton',
      status: 'scheduled',
      dueDate: '2025-07-15',
      priority: 'low',
      estimated: '1 hour',
      cost: 800
    }
  ];

  const resources = [
    { name: 'Seeds - Rice (Premium)', quantity: 150, unit: 'kg', cost: 18000, status: 'adequate' },
    { name: 'Organic Fertilizer', quantity: 25, unit: 'bags', cost: 12500, status: 'low' },
    { name: 'Pesticide - Neem Oil', quantity: 8, unit: 'liters', cost: 2400, status: 'adequate' },
    { name: 'Fuel - Diesel', quantity: 200, unit: 'liters', cost: 18000, status: 'good' }
  ];

  const equipment = [
    { name: 'Tractor - John Deere 5042D', status: 'active', maintenance: 'Due in 15 days', utilization: 85 },
    { name: 'Irrigation System', status: 'active', maintenance: 'Good condition', utilization: 70 },
    { name: 'Harvester', status: 'maintenance', maintenance: 'Under repair', utilization: 0 },
    { name: 'Sprayer Unit', status: 'active', maintenance: 'Good condition', utilization: 60 }
  ];

  const costAnalysis = {
    totalExpenses: 125000,
    projectedRevenue: 180000,
    profit: 55000,
    profitMargin: 30.6,
    categories: [
      { category: 'Seeds & Planting', amount: 35000, percentage: 28 },
      { category: 'Fertilizers', amount: 28000, percentage: 22.4 },
      { category: 'Irrigation', amount: 18000, percentage: 14.4 },
      { category: 'Labor', amount: 25000, percentage: 20 },
      { category: 'Equipment & Fuel', amount: 19000, percentage: 15.2 }
    ]
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-progress': return <Clock className="w-4 h-4 text-blue-500" />;
      case 'pending': return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'scheduled': return <Calendar className="w-4 h-4 text-gray-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'border-green-200 bg-green-50';
      case 'in-progress': return 'border-blue-200 bg-blue-50';
      case 'pending': return 'border-yellow-200 bg-yellow-50';
      case 'scheduled': return 'border-gray-200 bg-gray-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high': return <Badge variant="destructive">High</Badge>;
      case 'medium': return <Badge variant="secondary">Medium</Badge>;
      case 'low': return <Badge variant="outline">Low</Badge>;
      default: return <Badge variant="outline">Normal</Badge>;
    }
  };

  const getResourceStatus = (status: string) => {
    switch (status) {
      case 'good': return { color: 'text-green-600', bg: 'bg-green-100' };
      case 'adequate': return { color: 'text-blue-600', bg: 'bg-blue-100' };
      case 'low': return { color: 'text-yellow-600', bg: 'bg-yellow-100' };
      case 'critical': return { color: 'text-red-600', bg: 'bg-red-100' };
      default: return { color: 'text-gray-600', bg: 'bg-gray-100' };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-green-800">Farm Management</h1>
            <p className="text-lg text-green-600 mt-2">Optimize operations and track resources efficiently</p>
          </div>
          <div className="flex gap-2">
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Task
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule
            </Button>
          </div>
        </div>

        <Tabs defaultValue="activities" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="activities">Farm Activities</TabsTrigger>
            <TabsTrigger value="resources">Resource Management</TabsTrigger>
            <TabsTrigger value="equipment">Equipment Status</TabsTrigger>
            <TabsTrigger value="costs">Cost Analysis</TabsTrigger>
          </TabsList>

          {/* Activities Tab */}
          <TabsContent value="activities" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activities.map((activity) => (
                <Card key={activity.id} className={`${getStatusColor(activity.status)} border`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(activity.status)}
                        <CardTitle className="text-base">{activity.task}</CardTitle>
                      </div>
                      {getPriorityBadge(activity.priority)}
                    </div>
                    <CardDescription>{activity.crop}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Due Date:</span>
                        <span className="font-medium">{new Date(activity.dueDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Estimated Time:</span>
                        <span className="font-medium">{activity.estimated}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Cost:</span>
                        <span className="font-medium text-green-600">₹{activity.cost.toLocaleString()}</span>
                      </div>
                      <div className="pt-2">
                        <Button size="sm" variant="outline" className="w-full">
                          <Edit className="w-3 h-3 mr-2" />
                          Update Status
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Activity Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-green-600">3</p>
                  <p className="text-sm text-gray-600">Completed</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-600">2</p>
                  <p className="text-sm text-gray-600">In Progress</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <AlertCircle className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-yellow-600">4</p>
                  <p className="text-sm text-gray-600">Pending</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-purple-600">6</p>
                  <p className="text-sm text-gray-600">Scheduled</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-orange-500" />
                  Resource Inventory
                </CardTitle>
                <CardDescription>Track and manage farm resources and supplies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {resources.map((resource, index) => {
                    const statusStyle = getResourceStatus(resource.status);
                    return (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{resource.name}</h3>
                          <Badge className={`${statusStyle.bg} ${statusStyle.color}`}>
                            {resource.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Quantity:</span>
                            <p className="font-medium">{resource.quantity} {resource.unit}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Value:</span>
                            <p className="font-medium text-green-600">₹{resource.cost.toLocaleString()}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Unit Cost:</span>
                            <p className="font-medium">₹{Math.round(resource.cost / resource.quantity)}</p>
                          </div>
                          <div>
                            <Button size="sm" variant="outline">
                              <Plus className="w-3 h-3 mr-1" />
                              Reorder
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Equipment Tab */}
          <TabsContent value="equipment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tractor className="w-5 h-5 text-blue-500" />
                  Equipment Management
                </CardTitle>
                <CardDescription>Monitor equipment status and maintenance schedules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {equipment.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">{item.name}</h3>
                        <Badge variant={
                          item.status === 'active' ? 'default' : 
                          item.status === 'maintenance' ? 'destructive' : 'secondary'
                        }>
                          {item.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label className="text-sm text-gray-600">Maintenance</Label>
                          <p className="font-medium">{item.maintenance}</p>
                        </div>
                        <div>
                          <Label className="text-sm text-gray-600">Utilization</Label>
                          <div className="mt-1">
                            <div className="flex items-center gap-2">
                              <Progress value={item.utilization} className="flex-1" />
                              <span className="text-sm font-medium">{item.utilization}%</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-end">
                          <Button size="sm" variant="outline">
                            <Edit className="w-3 h-3 mr-1" />
                            Update
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cost Analysis Tab */}
          <TabsContent value="costs" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-500" />
                    Financial Overview
                  </CardTitle>
                  <CardDescription>Current season financial performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-lg text-gray-600">Total Expenses</span>
                      <span className="text-2xl font-bold text-red-600">₹{costAnalysis.totalExpenses.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-lg text-gray-600">Projected Revenue</span>
                      <span className="text-2xl font-bold text-blue-600">₹{costAnalysis.projectedRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-lg text-gray-600">Expected Profit</span>
                      <span className="text-2xl font-bold text-green-600">₹{costAnalysis.profit.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-lg text-gray-600">Profit Margin</span>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-green-500" />
                        <span className="text-2xl font-bold text-green-600">{costAnalysis.profitMargin}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cost Breakdown</CardTitle>
                  <CardDescription>Expense distribution by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {costAnalysis.categories.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{category.category}</span>
                          <span className="text-gray-600">₹{category.amount.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress value={category.percentage} className="flex-1" />
                          <span className="text-sm font-medium w-12">{category.percentage}%</span>
                        </div>
                      </div>
                    ))}
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