import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DashboardCard } from "@/components/DashboardCard";
import { CreditCard, DollarSign, Receipt, Wallet } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Fees() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-secondary">
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-semibold">Fee Management</h1>
                <p className="text-muted-foreground mt-1">
                  Manage student fees and payments
                </p>
              </div>
              <SidebarTrigger />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <DashboardCard
                title="Total Collections"
                value="$128,450"
                icon={<DollarSign className="w-6 h-6 text-primary" />}
                trend={{ value: 12, isPositive: true }}
              />
              <DashboardCard
                title="Pending Fees"
                value="$24,800"
                icon={<Receipt className="w-6 h-6 text-primary" />}
                trend={{ value: 5, isPositive: false }}
              />
              <DashboardCard
                title="Online Payments"
                value="82"
                icon={<CreditCard className="w-6 h-6 text-primary" />}
                trend={{ value: 8, isPositive: true }}
              />
              <DashboardCard
                title="Scholarships"
                value="$12,400"
                icon={<Wallet className="w-6 h-6 text-primary" />}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Add Fee Payment</CardTitle>
                  <CardDescription>Record a new fee payment</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="student">Student</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select student" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">John Doe</SelectItem>
                          <SelectItem value="2">Jane Smith</SelectItem>
                          <SelectItem value="3">Mike Johnson</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount</Label>
                      <Input
                        id="amount"
                        placeholder="Enter amount"
                        type="number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Payment Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select payment type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tuition">Tuition Fee</SelectItem>
                          <SelectItem value="library">Library Fee</SelectItem>
                          <SelectItem value="hostel">Hostel Fee</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">Record Payment</Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Latest fee payments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-4 rounded-lg bg-secondary"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                            <Receipt className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">John Doe</p>
                            <p className="text-sm text-muted-foreground">
                              Tuition Fee
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$1,200</p>
                          <p className="text-sm text-muted-foreground">
                            2 hours ago
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}