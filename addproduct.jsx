import { useForm } from "react-hook-form";
import "./addproduct.css";
import { useState } from "react";
import axios from "axios";
export function AddProduct() {
    const [productimage,setproductimage] = useState();
    const {
        register,
        handleSubmit
    } = useForm();

    //funtion for saving data
    async function savedata(data){
        let formdata = new FormData();
        formdata.append("Product_name",data.Product_name);
        formdata.append("old_price",data.old_price);
        formdata.append("new_price",data.new_price);
        formdata.append("discount_percent",data.discount_percent);
        formdata.append("stock_count",data.stock_count);
        formdata.append("product_image",productimage);

        const config={
            headers :{"content-type":"multipart/form data"}
        }
        const res = await axios.post("http://localhost:4001/saveproductdata",formdata,config)
        window.location.reload();
    }

    //function for save image
    function loadimage(event){
        var reader = new FileReader();
        reader.onload = function(){
            setproductimage(reader.result)
        }
        reader.readAsDataURL(event.target.files[0]);
    }
    return (
        <div style={{ marginLeft: "400px", width: "50%", marginTop: "50px", marginBottom: "50px", border: "1px solid", borderRadius: "15px" }} >
            <form onSubmit={handleSubmit((data)=>{savedata(data)})}>
                <h3 style={{ margin: "20px", fontSize: "40px" }}>Add Product</h3>
                <div >
                    <input type="text" placeholder="name" className="productform form-control" name="Product_name" {...register('Product_name')}/>
                </div>
                <div>
                    <input type="text" placeholder="oldprice" className="productform form-control" name="old_price" {...register('old_price')} />
                </div>
                <div>
                    <input type="text" placeholder="newprice" className="productform form-control" name="new_price"
                    {...register('new_price')}/>
                </div>
                <div>
                    <input type="text" placeholder="discount" className="productform form-control" name="discount_percent"{...register('discount_percent')}/>
                </div>
                <div>
                    <input type="text" placeholder="stock count" className="productform form-control"name="stock_count"{...register('stock_count')}/>
                </div>
                <div>
                    <input type="file" placeholder="image" className="productform form-control"name="product_image"{...register('product_image')}  onChange={(event)=>{loadimage(event)}} />
                </div>
                <div>
                    <input type="submit" value='Add Product' className="btn btn-primary m-4 p-3 w-30" />
                </div>
            </form>
        </div>
    )
}