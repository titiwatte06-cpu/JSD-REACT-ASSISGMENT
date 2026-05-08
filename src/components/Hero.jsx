
import { useNavigate } from "react-router"
import { useState } from 'react'

function Hero() {
    let navigate = useNavigate()
    const [showUserTable, setShowUserTable] = useState(false)
    const [showTable, setShowTable] = useState(false)
    const [data, setData] = useState([
        { id: 1, name: "Tay", age: 25 },
        { id: 2, name: "John", age: 30 },
    ])
    const [showForm, setShowForm] = useState(false)
    const [newName, setNewName] = useState("")
    const [newAge, setNewAge] = useState("")
    const [editId, setEditId] = useState(null)
    const [editName, setEditName] = useState("")
    const [editAge, setEditAge] = useState("")

    const handleAdd = () => {
        if (!newName || !newAge) return
        setData([...data, { id: data.length + 1, name: newName, age: Number(newAge) }])
        setNewName("")
        setNewAge("")
        setShowForm(false)
    }

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const handleEdit = (item) => {
        setEditId(item.id)
        setEditName(item.name)
        setEditAge(item.age)
    }

    const handleSaveEdit = () => {
        setData(data.map((item) =>
            item.id === editId
                ? { ...item, name: editName, age: Number(editAge) }
                : item
        ))
        setEditId(null)
    }

    return (
        <div className="bg-gray-300 text-black h-auto">
            <h1>Generation Thailand<br/>React Assesments</h1>

            <div className="flex items-center justify-center gap-40">
                <button className="bg-gray-200 p-3" onClick={() => setShowUserTable(!showUserTable)}>
                    User Home Section
                </button>
                <button className="bg-gray-200 p-3" onClick={() => setShowTable(!showTable)}>
                    {showTable ? "ซ่อนตาราง" : "Admin"}
                </button>
            </div>

            {showUserTable && (
                <div className="mt-4 flex flex-col items-center">
                    <h2 className="text-xl font-bold mb-2">User Home Section</h2>
                    <table className="border">
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
                </div>
            )}

            {showTable && (
                <div className="mt-4 flex flex-col items-center">
                    <button 
                        onClick={() => setShowForm(!showForm)}
                        className="bg-green-400 p-2 mb-2 text-white"
                    >
                        + เพิ่มสมาชิก
                    </button>

                    {showForm && (
                        <div className="flex gap-2 mb-4">
                            <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="ชื่อ" className="border p-2"/>
                            <input value={newAge} onChange={(e) => setNewAge(e.target.value)} placeholder="อายุ" className="border p-2"/>
                            <button onClick={handleAdd} className="bg-blue-400 p-2 text-white">บันทึก</button>
                        </div>
                    )}

                    <table className="border">
                        <thead>
                            <tr className="bg-gray-400">
                                <th className="p-2 border">ID</th>
                                <th className="p-2 border">ชื่อ</th>
                                <th className="p-2 border">อายุ</th>
                                <th className="p-2 border">จัดการ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td className="p-2 border">{item.id}</td>
                                    <td className="p-2 border">
                                        {editId === item.id
                                            ? <input value={editName} onChange={(e) => setEditName(e.target.value)} className="border p-1"/>
                                            : item.name
                                        }
                                    </td>
                                    <td className="p-2 border">
                                        {editId === item.id
                                            ? <input value={editAge} onChange={(e) => setEditAge(e.target.value)} className="border p-1"/>
                                            : item.age
                                        }
                                    </td>
                                    <td className="p-2 border flex gap-2">
                                        {editId === item.id
                                            ? <button onClick={handleSaveEdit} className="bg-blue-400 p-1 text-white">บันทึก</button>
                                            : <button onClick={() => handleEdit(item)} className="bg-yellow-400 p-1">แก้ไข</button>
                                        }
                                        <button onClick={() => handleDelete(item.id)} className="bg-red-400 p-1 text-white">ลบ</button>
                                    </td>
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