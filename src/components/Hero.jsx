import { useNavigate } from "react-router"
import { useState , useEffect} from 'react'


function Hero() {
    let navigate = useNavigate()
    const [showUserTable, setShowUserTable] = useState(false)
    const [showAdminTable, setShowAdminTable] = useState(false)

    const [data, setData] = useState([])  // เริ่มต้นเป็น array ว่าง

    useEffect(() => {
        fetch('https://67eca027aa794fb3222e43e2.mockapi.io/members')
            .then(res => res.json())
            .then(data => {
                console.log(data) 
                setData(data)})
                  // เก็บข้อมูลลง state
    }, [])  // รันแค่ครั้งเดียวตอนเปิดหน้า

    
    const [newName, setNewName] = useState("")
    const [newAge, setNewAge] = useState("")
    const [newPosition, setNewPosition] = useState("")
    const [home,setHome] = useState("React - Assesments")

    const handleAdd = () => {
        if (!newName || !newAge || !newPosition) return
        setData([...data, { id: data.length + 1, name: newName, lastname: newAge , position:newPosition }])
        setNewName("")
        setNewAge("")
        setNewPosition("")
    }

    const handleDelete = (id) => {
    const filtered = data.filter((item) => item.id !== id)  // ลบออก
    const reordered = filtered.map((item, index) => ({      // เรียง id ใหม่
        ...item,
        id: index + 1
    }))
    setData(reordered)
    }

    return (
        <div className="bg-gray-300 text-black h-auto min-h-screen p-10">
            <h1 className="text-4xl font-bold text-center mb-8">
                Generation Thailand<br/>{home}
            </h1>

            {/* ปุ่ม */}
            <div className="flex items-center justify-center gap-10 mb-8">
                <button 
                    className="bg-gray-200 p-3 rounded"
                    onClick={() => {
                        setShowUserTable(!showUserTable)
                    setHome(!showUserTable ? "User-Home Section" : "React - Assesments")
                    }}
                    
                >
                    UserHome Section
                </button>
                <button 
                    className="bg-gray-200 p-3 rounded"
                    onClick={() => {
                        setShowAdminTable(!showAdminTable) 
                    setHome(!showUserTable ? "React - Assesments" : "Admin-Home Section")}
                        }
                >
                    Admin Home Section
                </button>
            </div>

            {/* ตาราง */}
            {showUserTable && (
                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-bold mb-4">User Home Section</h2>

                    {/* form เพิ่มข้อมูล — แสดงเฉพาะตอน Admin เปิด */}
                    {showAdminTable && (
                        <div className="flex gap-2 mb-4">
                            <input
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                placeholder="ชื่อ"
                                className="border p-2 rounded"
                            />
                            <input
                                value={newAge}
                                onChange={(e) => setNewAge(e.target.value)}
                                placeholder="นามสกุล"
                                className="border p-2 rounded"
                            />

                            <input
                                value={newPosition}
                                onChange={(e) => setNewPosition(e.target.value)}
                                placeholder="ตำแหน่ง"
                                className="border p-2 rounded"
                            />

                            <button 
                                onClick={handleAdd} 
                                className="bg-green-400 p-2 text-white rounded"
                            >
                                + เพิ่มสมาชิก
                            </button>
                        </div>
                    )}

                    <table className="border w-full max-w-lg">
                        <thead>
                            <tr className="bg-gray-400">
                                <th className="p-2 border">ID</th>
                                <th className="p-2 border">ชื่อจริง</th>
                                <th className="p-2 border">นาสกุล</th>
                                <th className="p-2 border">ตำแหน่ง</th>
                                {showAdminTable && (
                                    <th className="p-2 border">จัดการ</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td className="p-2 border text-center">{item.id}</td>
                                    <td className="p-2 border text-center">{item.name}</td>
                                    <td className="p-2 border text-center">{item.lastname}</td>
                                    <td className="p-2 border text-center">{item.position}</td>
                                    {showAdminTable && (
                                        <td className="p-2 border text-center">
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="bg-red-400 px-2 py-1 text-white rounded"
                                            >
                                                ลบ
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default Hero