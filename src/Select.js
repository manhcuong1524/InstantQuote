import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import './Select.css'

function Selects({ dataProduct }) {
    return (
        <div className="select">
            <FormControl className="selectForm">
                <NativeSelect>
                    {dataProduct.map((item, index) => {
                        return <option key={index} value={10}>{item.title}</option>
                    })}

                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default Selects