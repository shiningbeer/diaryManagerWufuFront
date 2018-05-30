import * as web from './webapi'
import * as TYPES from './types'

export const tokenAction={
    fetch:(user,pw,callback)=>{
        return (dispatch)=>{
            web.user.login(user,pw,(code,body)=>{
                if(code==200){
                    localStorage.setItem('token',body)
                    dispatch({
                        'type':TYPES.TOKEN.FETCHED,
                        'token':body
                    })
                    callback('登录成功！')
                }
                else
                    callback(body)
                          
    
            })
        }
    },
    delete:()=>{
        localStorage.removeItem('token')
        return {
        'type':TYPES.TOKEN.DELETED
        }
    }
}

export const productAction={
    upload:(newProduct,callback)=>{
        const token=localStorage.getItem('token')
       return (dispatch)=>{
            dispatch({
                'type':TYPES.PRODUCT.UPLOAD.ONGOING,
            })
            web.product.add(newProduct,token,(code,body)=>{
                if(code==200){
                    
                    dispatch({
                        'type':TYPES.PRODUCT.UPLOAD.SUCCESS,
                        'productId':body
                    })
                    callback('数据上传成功！')
                }
                else{
                    dispatch({
                        'type':TYPES.PRODUCT.UPLOAD.ERROR,
                    })    
                    callback(body)
                }
            })
        }
        
    },
    get:(callback)=>{
        const token=localStorage.getItem('token')
       return (dispatch)=>{
            dispatch({
                'type':TYPES.PRODUCT.GET.ONGOING,
            })
            web.product.get({},token,(code,body)=>{
                if(code==200){                    
                    dispatch({
                        'type':TYPES.PRODUCT.GET.SUCCESS,
                        'products':body
                    })                    
                }
                else{
                    dispatch({
                        'type':TYPES.PRODUCT.GET.ERROR,
                    })    
                    callback(body)
                }
            })
        }
    },
    getPics:(productId,callback)=>{
        const token=localStorage.getItem('token')
       return (dispatch)=>{
            dispatch({
                'type':TYPES.PRODUCT.GETPIC.ONGOING,
            })
            web.product.getPics(productId,token,(code,body)=>{
                console.log(body)
                if(code==200){                    
                    dispatch({
                        'type':TYPES.PRODUCT.GETPIC.SUCCESS,
                        'pics':body
                    })                    
                }
                else{
                    dispatch({
                        'type':TYPES.PRODUCT.GETPIC.ERROR,
                    })    
                    callback(body)
                }
            })
        }
    }
}

