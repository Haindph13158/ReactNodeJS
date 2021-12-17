import React from 'react'

function Footer() {
    return (
        <div>
             <div className="container-fuild bg-dark ">
                <div className="container">
                    <div className="d-flex justify-content-evenly">
                        <div className="row me-3 col-3">
                            <div className="img">
                                <img src="https://res-console.cloudinary.com/dvqnyjmr8/thumbnails/v1/image/upload/v1639199275/VW50aXRsZWQzX29tc3Zueg==/preview" alt="" />
                                <div className="d-flex">
                                    <div >
                                        <i className="fas fa-map-marker-alt text-white" />
                                    </div>
                                    <div className="ps-3">
                                        <span className="text-white">Tổ dân phố 4A - Phường Phố Cò - Thành phố Sông Công - Thái
                                            Nguyên</span>
                                    </div>
                                </div>
                                <div className="d-flex mt-2">
                                    <div >
                                        <i className="fas fa-phone text-white" />
                                    </div>
                                    <div className="ps-3">
                                        <span className="text-white">096.885.6903</span>
                                    </div>
                                </div>
                                <div className="d-flex mt-2">
                                    <div >
                                        <i className="fab fa-facebook-square text-white" />
                                    </div>
                                    <div className="ps-3">
                                        <span className="text-white">fb.com/drhaisctn2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 col-3">
                            <h2 className="text-white">SẢN PHẨM</h2>
                            <div className="mt-4">
                                <span className="text-white">Rau củ</span>
                            </div>
                            <div >
                                <p className="text-white mt-4">Hải sản</p>
                            </div>
                            <div >
                                <p className="text-white">Thịt trứng</p>
                            </div>
                            <div >
                                <p className="text-white">Trái cây</p>
                            </div>
                            <div >
                                <p className="text-white">Đồ uống</p>
                            </div>
                        </div>
                        <div className="row col-3 pt-5">
                            <div >
                                <h2 className="text-white">ĐĂNG KÝ</h2>
                                <div className="mt-4">
                                    <p className="text-white">Đăng ký để nhận thông tin mới nhất từ chúng tôi!</p>
                                </div>
                                <div className="mt-4 input-email">
                                    <input type="email" placeholder="Nhập email..." className="p-1 " />
                                    <button className="btn btn-danger">Gửi</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
           
        </div >
    )
}

export default Footer
