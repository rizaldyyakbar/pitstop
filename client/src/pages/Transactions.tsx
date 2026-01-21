import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, SearchIcon, DownloadIcon, PlusIcon } from "lucide-react"

// Extended transaction data
const allTransactions = [
  { id: 1, description: "Grocery Store", category: "Food", amount: -125.5, date: "2026-01-01", type: "expense", merchant: "Whole Foods Market" },
  { id: 2, description: "Salary Deposit", category: "Income", amount: 3500.0, date: "2025-12-31", type: "income", merchant: "Acme Corp" },
  { id: 3, description: "Electric Bill", category: "Utilities", amount: -89.2, date: "2025-12-30", type: "expense", merchant: "City Power Co" },
  { id: 4, description: "Coffee Shop", category: "Food", amount: -15.75, date: "2025-12-30", type: "expense", merchant: "Brew Haven" },
  { id: 5, description: "Gas Station", category: "Transportation", amount: -62.0, date: "2025-12-29", type: "expense", merchant: "Shell Gas" },
  { id: 6, description: "Amazon Purchase", category: "Shopping", amount: -245.99, date: "2025-12-28", type: "expense", merchant: "Amazon.com" },
  { id: 7, description: "Freelance Project", category: "Income", amount: 850.0, date: "2025-12-27", type: "income", merchant: "Client ABC" },
  { id: 8, description: "Restaurant", category: "Food", amount: -78.4, date: "2025-12-26", type: "expense", merchant: "Olive Garden" },
  { id: 9, description: "Gym Membership", category: "Health", amount: -49.99, date: "2025-12-25", type: "expense", merchant: "FitnessPro Gym" },
  { id: 10, description: "Movie Tickets", category: "Entertainment", amount: -28.5, date: "2025-12-24", type: "expense", merchant: "AMC Theaters" },
  { id: 11, description: "Internet Bill", category: "Utilities", amount: -59.99, date: "2025-12-23", type: "expense", merchant: "Comcast" },
  { id: 12, description: "Bonus Payment", category: "Income", amount: 1200.0, date: "2025-12-22", type: "income", merchant: "Acme Corp" },
  { id: 13, description: "Pharmacy", category: "Health", amount: -35.2, date: "2025-12-21", type: "expense", merchant: "CVS Pharmacy" },
  { id: 14, description: "Uber Ride", category: "Transportation", amount: -24.5, date: "2025-12-20", type: "expense", merchant: "Uber" },
  { id: 15, description: "Spotify Subscription", category: "Entertainment", amount: -11.99, date: "2025-12-19", type: "expense", merchant: "Spotify AB" },
]

export function TransactionsView() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")
  const [filterType, setFilterType] = useState("all")
  const [sortBy, setSortBy] = useState("date-desc")

  // Get unique categories
  const categories = Array.from(new Set(allTransactions.map((t) => t.category)))

  // Filter transactions
  let filtered = allTransactions.filter((t) => {
    const matchesSearch =
      t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.merchant.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === "all" || t.category === filterCategory
    const matchesType = filterType === "all" || t.type === filterType
    return matchesSearch && matchesCategory && matchesType
  })

  // Sort transactions
  if (sortBy === "date-desc") {
    filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } else if (sortBy === "date-asc") {
    filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  } else if (sortBy === "amount-high") {
    filtered.sort((a, b) => Math.abs(b.amount) - Math.abs(a.amount))
  } else if (sortBy === "amount-low") {
    filtered.sort((a, b) => Math.abs(a.amount) - Math.abs(b.amount))
  }

  const totalAmount = filtered.reduce((sum, t) => sum + t.amount, 0)
  const totalExpenses = filtered.filter((t) => t.type === "expense").reduce((sum, t) => sum + Math.abs(t.amount), 0)
  const totalIncome = filtered.filter((t) => t.type === "income").reduce((sum, t) => sum + t.amount, 0)

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header with Back Button */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hover:bg-muted" onClick={() => window.history.back()}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="space-y-1 flex-1">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Transactions</h1>
            <p className="text-muted-foreground">View and manage all your financial transactions</p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Transaction
          </Button>
        </div>

        {/* Summary Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border border-border bg-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Amount</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${totalAmount >= 0 ? "text-primary" : "text-destructive"}`}>
                {totalAmount >= 0 ? "+" : "-"}${Math.abs(totalAmount).toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">{filtered.length} transactions</p>
            </CardContent>
          </Card>

          <Card className="border border-border bg-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Income</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">+${totalIncome.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {filtered.filter((t) => t.type === "income").length} transactions
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border bg-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">${totalExpenses.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {filtered.filter((t) => t.type === "expense").length} transactions
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="border border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 md:flex-row md:items-end">
              <div className="flex-1">
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Search</label>
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search by description or merchant..."
                    className="pl-10 bg-muted border-border text-card-foreground placeholder:text-muted-foreground"
                    value={searchTerm}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="min-w-[150px]">
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Category</label>
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger className="bg-muted border-border text-card-foreground">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-0">
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="min-w-[150px]">
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Type</label>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="bg-muted border-border text-card-foreground">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="income">Income</SelectItem>
                    <SelectItem value="expense">Expense</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="min-w-[150px]">
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Sort By</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="bg-muted border-border text-card-foreground">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="date-desc">Newest First</SelectItem>
                    <SelectItem value="date-asc">Oldest First</SelectItem>
                    <SelectItem value="amount-high">Highest Amount</SelectItem>
                    <SelectItem value="amount-low">Lowest Amount</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto">
                <DownloadIcon className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Transactions Table */}
        <Card className="border border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">
              Transaction Details
              <span className="ml-2 text-sm font-normal text-muted-foreground">({filtered.length})</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-border hover:bg-muted/50">
                    <TableHead className="text-muted-foreground">Date</TableHead>
                    <TableHead className="text-muted-foreground">Description</TableHead>
                    <TableHead className="text-muted-foreground">Merchant</TableHead>
                    <TableHead className="text-muted-foreground">Category</TableHead>
                    <TableHead className="text-right text-muted-foreground">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.length > 0 ? (
                    filtered.map((transaction) => (
                      <TableRow key={transaction.id} className="border-border hover:bg-muted/50 transition-colors">
                        <TableCell className="text-card-foreground font-medium">
                          {new Date(transaction.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </TableCell>
                        <TableCell className="text-card-foreground">{transaction.description}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">{transaction.merchant}</TableCell>
                        <TableCell>
                          <Badge
                            variant={transaction.type === "income" ? "default" : "secondary"}
                            className={
                              transaction.type === "income"
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-secondary-foreground"
                            }
                          >
                            {transaction.category}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          <span className={transaction.type === "income" ? "text-primary" : "text-destructive"}>
                            {transaction.type === "income" ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                        No transactions found matching your filters
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}