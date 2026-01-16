
import db from "@/lib/db"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export const dynamic = 'force-dynamic'

interface Message {
    id: number
    name: string
    email: string
    message: string
    created_at: string
}

export default function AdminMessagesPage() {
    const messages = db.prepare("SELECT * FROM messages ORDER BY created_at DESC").all() as Message[]

    return (
        <div className="min-h-screen p-8 bg-background">
            <Card className="max-w-6xl mx-auto">
                <CardHeader>
                    <CardTitle>Contact Messages (Secure)</CardTitle>
                </CardHeader>
                <CardContent>
                    {messages.length === 0 ? (
                        <p className="text-muted-foreground">No messages found.</p>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Message</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {messages.map((msg) => (
                                    <TableRow key={msg.id}>
                                        <TableCell className="whitespace-nowrap">
                                            {new Date(msg.created_at).toLocaleString()}
                                        </TableCell>
                                        <TableCell>{msg.name}</TableCell>
                                        <TableCell>{msg.email}</TableCell>
                                        <TableCell className="max-w-md truncate" title={msg.message}>
                                            {msg.message}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
