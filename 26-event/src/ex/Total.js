import React, {useState} from 'react'


const Total = () => {
    
    const fruitList = ['apple', 'kiwi', 'banana'];
    const bgColorList = ['green', 'red', 'blue'];
    const colorList = ['pink', 'violet', 'gray'];



    const [color, setColor] = useState('white');
    const [bgColor, setBgColor] = useState('black');
    const [text, setText] = useState('text');
    const [fruit, setFruit] = useState('apple');
    const [fruitPic, setFruitPic] = useState('/apple.jpg');

    const fruitChange = (e) => {
        setFruit(e.currentTarget.value);

        if(e.currentTarget.value === 'apple'){
            setFruitPic('/apple.jpg')
        } else if(e.currentTarget.value === 'kiwi'){
            setFruitPic('/kiwi.jpg')
        }else if(e.currentTarget.value === 'banana'){
            setFruitPic('/banana.jpg');
        }
    }

    const bgColorChange = (e) => {
        setBgColor(e.currentTarget.value);

        if(e.currentTarget.value === 'green'){
            setBgColor('green')
        } else if(e.currentTarget.value === 'red'){
            setBgColor('red')
        }else if(e.currentTarget.value === 'blue'){
            setBgColor('blue');
        }
    }

    const colorChange = (e) => {
        setColor(e.currentTarget.value);

        if(e.currentTarget.value === 'pink'){
            setColor('pink')
        } else if(e.currentTarget.value === 'violet'){
            setColor('violet')
        }else if(e.currentTarget.value === 'gray'){
            setColor('gray');
        }
    }

    const textChange = (e) => {
        setText(e.target.value)
    }


  
    return (
        <div>
            <form action="">
                <label htmlFor="fruit">과일: </label>
                <select onChange={fruitChange} value={fruit}> 
                    {fruitList.map((item) => {
                        return <option value={item} key={item}>
                            {item}
                        </option>
                    })}
                </select>
                <p>
                    {fruit}
                </p>


                <label htmlFor="color">배경색: </label>
                <select onChange={bgColorChange} value={bgColor}>
                    {bgColorList.map((item) => {
                        return <option value={item} key={item}>
                            {item}
                        </option>
                    })}
                </select>

                <label>글자색: </label>
                <select onChange={colorChange} value={color}>
                    {colorList.map((item) => {
                        return <option value={item} key={item}>
                            {item}
                        </option>
                    })}
                </select>

                <br />
                <label htmlFor="content">내용: </label> <input type="text" id="content" onChange={textChange} />
            </form>

            <div className='res'>
                
                <img src={fruitPic} style={{width: '100px'}} alt="" />
                <p style={{color: color, backgroundColor: bgColor}}>{text}</p>
            </div>

        </div>
  )
}

export default Total