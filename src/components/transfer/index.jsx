import {Transfer} from 'antd';
import api from '../../services/api';
import {useState, useEffect} from 'react';
import 'antd/dist/antd.css';




const StudentsTable = () =>{
    const [students, setStudents] = useState([]);
    
    const mockData = [];
    for (let i = 0; i < students.length; i++) {
      mockData.push({
        key: i.toString(),
        title: students[i].name,
      });
    }
    
    const initialTargetKeys = mockData.filter(item => +item.key > 10).map(item => item.key);


    const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
    const [selectedKeys, setSelectedKeys] = useState([]);
    
    const onChange = (nextTargetKeys, direction, moveKeys) => {
    console.log('targetKeys:', nextTargetKeys);
    console.log('direction:', direction);
    console.log('moveKeys:', moveKeys);
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    console.log('sourceSelectedKeys:', sourceSelectedKeys);
    console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const onScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };
    
    useEffect(() =>{
        api.get('/students')
            .then(res => setStudents(res.data))
    }, [])

    return(
        <div>
            <p>Alunos</p>
            <Transfer
                dataSource={mockData}
                titles={['Source', 'Target']}
                targetKeys={targetKeys}
                selectedKeys={selectedKeys}
                onChange={onChange}
                onSelectChange={onSelectChange}
                onScroll={onScroll}
                render={item => item.title}
            />
        </div>

    )
}

export default StudentsTable