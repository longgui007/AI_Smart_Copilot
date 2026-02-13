import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"


export function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: any) => {
        e.preventDefault()
        navigate("/home")
    }

    return (
        <div className="min-h-screen bg-white text-black antialiased">
            <div className="container mx-auto px-6 py-16 grid gap-12 lg:grid-cols-2 items-center">
                <div className="max-w-xl">
                    <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
                        欢迎回来
                        <span className="block text-3xl font-medium text-gray-600 mt-2">黑白 · 简约 · 高级</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-600">
                        使用我们的控制台快速查看关键指标并高效决策。
                    </p>

                    <ul className="mt-8 space-y-3 text-sm text-gray-600">
                        <li>• 实时数据可视化</li>
                        <li>• 响应式布局，适配多端</li>
                        <li>• 极简黑白设计，强调内容</li>
                    </ul>

                    <div className="mt-8 flex gap-4">
                        <Button size="lg" onClick={() => navigate('/home')}>立即查看看板</Button>
                        <Button variant="outline" size="lg">了解更多</Button>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <Card className="w-full max-w-md border-2 border-black bg-white">
                        <CardHeader>
                            <CardTitle className="text-2xl">登录到你的账户</CardTitle>
                            <CardDescription>使用邮箱与密码登录 — 黑白简约风</CardDescription>
                        </CardHeader>

                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">邮箱</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="m@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">密码</Label>
                                            <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                                                忘记密码？
                                            </a>
                                        </div>
                                        <Input
                                            id="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="flex items-center justify-between text-sm text-gray-600">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" className="h-4 w-4" />
                                            <span>记住我</span>
                                        </label>
                                    </div>

                                    <div className="mt-2 flex flex-col gap-2">
                                        <Button type="submit" className="w-full" disabled={!email || !password}>
                                            登录
                                        </Button>
                                        <Button variant="outline" className="w-full" onClick={() => navigate("/home")}>
                                            游客登录
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </CardContent>

                        <CardFooter className="flex-col gap-2">
                            <div className="text-xs text-gray-500">
                                还没有账户？ <a href="#" className="underline">注册</a>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}