import { useEffect, useRef } from "react"
import echarts from "../../lib/myEcharts"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "../../components/ui/card"
import { Button } from "../../components/ui/button"

export default function Home() {
    const lineRef = useRef<HTMLDivElement | null>(null)
    const barRef = useRef<HTMLDivElement | null>(null)
    const pieRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const lineChart = lineRef.current && echarts.init(lineRef.current)
        const barChart = barRef.current && echarts.init(barRef.current)
        const pieChart = pieRef.current && echarts.init(pieRef.current)

        if (lineChart) {
            lineChart.setOption({
                title: { text: "流量趋势", left: "center", textStyle: { color: "#111" } },
                tooltip: { trigger: "axis" },
                xAxis: { type: "category", data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"] },
                yAxis: { type: "value" },
                series: [{ name: "访问", type: "line", smooth: true, data: [120, 200, 150, 80, 70, 110, 130], itemStyle: { color: "#000" } }],
            })
        }

        if (barChart) {
            barChart.setOption({
                title: { text: "转化率", left: "center", textStyle: { color: "#111" } },
                tooltip: {},
                xAxis: { type: "category", data: ["首页", "产品", "结算", "订单"] },
                yAxis: { type: "value" },
                series: [{ name: "次数", type: "bar", data: [320, 200, 150, 80], itemStyle: { color: "#111" } }],
            })
        }

        if (pieChart) {
            pieChart.setOption({
                title: { text: "用户分布", left: "center", textStyle: { color: "#111" } },
                tooltip: { trigger: "item" },
                legend: { bottom: 0 },
                series: [
                    {
                        name: "来源",
                        type: "pie",
                        radius: "50%",
                        data: [
                            { value: 1048, name: "搜索引擎" },
                            { value: 735, name: "直接访问" },
                            { value: 580, name: "邮件营销" },
                        ],
                        itemStyle: { borderColor: "#fff", borderWidth: 1 },
                    },
                ],
            })
        }

        const resize = () => {
            lineChart && lineChart.resize()
            barChart && barChart.resize()
            pieChart && pieChart.resize()
        }
        window.addEventListener("resize", resize)

        return () => {
            window.removeEventListener("resize", resize)
            lineChart && lineChart.dispose()
            barChart && barChart.dispose()
            pieChart && pieChart.dispose()
        }
    }, [])

    // 返回首页
    const handleBack = () => {
        window.history.back()
    }

    return (
        <main className="min-h-screen bg-white text-black antialiased p-6">
            <div className="container mx-auto grid gap-6">
                <header className="flex items-center justify-between">
                    <Button onClick={handleBack}>返回</Button>
                    <h2 className="text-2xl font-bold">数据看板</h2>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost">导出</Button>
                        <Button>刷新</Button>
                    </div>
                </header>

                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card className="h-64">
                        <CardHeader>
                            <CardTitle>流量趋势</CardTitle>
                            <CardDescription>最近一周访问趋势</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div ref={lineRef} className="w-full h-40" />
                        </CardContent>
                        <CardFooter />
                    </Card>

                    <Card className="h-64">
                        <CardHeader>
                            <CardTitle>转化统计</CardTitle>
                            <CardDescription>按页面行为统计</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div ref={barRef} className="w-full h-40" />
                        </CardContent>
                        <CardFooter />
                    </Card>

                    <Card className="h-64">
                        <CardHeader>
                            <CardTitle>用户来源</CardTitle>
                            <CardDescription>渠道占比</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div ref={pieRef} className="w-full h-40" />
                        </CardContent>
                        <CardFooter />
                    </Card>
                </section>

                <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} 你的公司 — 数据驱动决策
                </footer>
            </div>
        </main>
    )
}