import ReactDom from 'react-dom'

export default function Modal(props) {
    const { children, handleCloseModal } = props
    console.log(children)
    return ReactDom.createPortal(
        <div className='modal-container'>
            <button onClick={handleCloseModal} className='modal-underlay' />
            <div className='modal-content'>
                {children}
            </div>
        </div>,
        document.getElementById('portal')
    )
}