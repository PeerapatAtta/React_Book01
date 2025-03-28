import React from 'react'

export default function FormCheck() {
    const switchReq = React.useRef()
    const styles = ['bold', 'italic', 'underline']
    const sizes = ['small', 'medium', 'large', 'larger']
    let checkedStyles = []
    let checkedSize = ''

    const onChangeCheck = (event) => {
        let checked = event.target.checked
        let value = event.target.value
        let idx = checkedStyles.indexOf(value)
        if (checked && idx === -1) {
            checkedStyles.push(value)
        } else {
            checkedStyles.splice(idx, 1)
        }
        //alert('selected styles:\n' + checkedStyles)
    }

    const onChangeRadio = (event) => {
        checkedSize = event.target.value
        //alert('selected size:\n' + checkedSize)      
    }

    const onClickButton = () => {
        if (switchReq.current.checked) {
            if (checkedStyles.length === 0) {
                alert('Please select style')
                return
            } else if (checkedSize === '') {
                alert('Please select size')
                return
            }
        }

        let msg = 'selected style(s): ' + checkedStyles.join(', ')
        msg += '\nselected size: ' + checkedSize
        alert(msg)
    }

    return (
        <div className="mt-4 mx-auto p-3 rounded"
            style={{ width: '450px', background: '#cee' }}>
            <h3 className=' text-center'>Checkbox, Radio, Switch</h3>
            <form>
                <span>font style:</span>&nbsp;&nbsp;
                {
                    styles.map((st, i) => {
                        return (
                            <div className="form-check form-check-inline mb-2">
                                <input type="checkbox" id={'check' + i} value={st}
                                    className="form-check-input" onChange={onChangeCheck} />
                                <label htmlFor={'check' + i} className="form-check-label">{st}</label>
                            </div>
                        )
                    })
                }
                <br />
                <span>font size:</span>&nbsp;&nbsp;
                {
                    sizes.map((sz, i) => {
                        return (
                            <div className="form-check form-check-inline mb-2">
                                <input type="radio" id={'radio' + i} name="fontSize" value={sz}
                                    className="form-check-input" onChange={onChangeRadio} />
                                <label htmlFor={'radio' + i} className="form-check-label">{sz}</label>
                            </div>
                        )
                    })
                }

                <div className="form-check form-switch mt-3">
                    <input type="checkbox" id="sw" value="require"
                        className="form-check-input" ref={switchReq} />
                    <label htmlFor="sw" className="form-check-label">require</label>
                </div>

                <div className="text-center mt-4">
                    <button type="button" className="btn btn-sm btn-primary px-4"
                        onClick={onClickButton}>OK
                    </button>
                </div>
            </form>
        </div>
    )
}