import { useNavigate } from "react-router"
import { useState } from 'react'

function Hero() {
    let navigate = useNavigate()

    const [showTable, setShowTable] = useState(false)

    // ข้อมูลตัวอย่าง
    const [data, setData] = useState([
        { id: 1, name: "Tay", age: 25 },
        { id: 2, name: "John", age: 30 },
    ])

    return (
        <div className="bg-gray-300 text-black h-lvh">
            <h1>Generation Thailand<br/>React Assesments</h1>

            <div className="flex items-center justify-center gap-40">
                <button 
                    className="bg-gray-200 p-3"
                    onClick={() => setShowTable(!showTable)}
                >
                    User Home Section
                </button>
                <button 
                    className="bg-gray-200 p-3"
                    onClick={() => setShowTable(!showTable)}  // ← toggle ตาราง
                >
                    Admin
                </button>
            </div>

            {/* ตาราง */}
            {showTable && (
                <table className="mt-4 mx-auto border">
                    <thead>
                        <tr className="bg-gray-400">
                            <th className="p-2 border">ID</th>
                            <th className="p-2 border">ชื่อ</th>
                            <th className="p-2 border">อายุ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td className="p-2 border">{item.id}</td>
                                <td className="p-2 border">{item.name}</td>
                                <td className="p-2 border">{item.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Hero
