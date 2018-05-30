var request = require('request');
var fs = require('fs');
var myConst = require('./const')


const url_base = 'http://localhost:'+myConst.port.toString()
const url_api=myConst.API_URL
const api={
   
    product:{
        add:url_base+url_api.product.add,
        del:url_base+url_api.product.del,
        update:url_base+url_api.product.update,
        get:url_base+url_api.product.get,
        getPics:url_base+url_api.product.getPics,
    },
    user:{
        register:url_base+url_api.user.register,
        login:url_base+url_api.user.login,
        logout:url_base+url_api.user.logout
    },
    picture:{
        add:url_base+url_api.picture.add,
        del:url_base+url_api.picture.del,
        get:url_base+url_api.picture.get,
        getThumbnail:url_base+url_api.picture.getThumbnail
    }
}


var postJson = (url, param, token, callback) => {
    request.post({
        url: url,
        json: true,
        headers: {
            "content-type": "application/json",
            'token':token
        },
        body: param
    }, (error, response, body) => {
        error?callback(600,error):callback(response.statusCode,body)            
    }) 
}

export const user={
    register:'',
    login:(name,pw, callback)=>{
        var param = {
            user:name,
            password:pw,
        }
        postJson(api.user.login, param,{},callback)
    },
    logout:'',
}

export const product={
    add: (newproduct, token,callback) => {
        var param = {
            newproduct: newproduct
        }   
        postJson(api.product.add, param, token,callback)
    },
    del:(id, token,callback) => {
        var param = {
            productId: id
        }
        postJson(api.product.del, param, token,callback)
    },
    update:(id,update, token,callback)=>{       
        var param = {
            productId:id,
            update:update
        }
        postJson(api.product.update, param, token,callback)
    },
    get:(condition,token, callback)=>{
        var param={
            condition:condition
        }
        postJson(api.product.get, param, token,callback)
    },
    getPics:(productId,token, callback)=>{
        var param={
            productId:productId
        }
        postJson(api.product.getPics, param, token,callback)
    }
    
}

export const picture={
    add:(productId,filepath, token,callback) => {
        var formData = {
            file: fs.createReadStream(filepath),        
        };
        request.post({
            url: api.picture.add,
            formData: formData,
            headers: {
                'token':token,
                'productId':productId,
            },
        }, (error, response, body) => {
            if(error)
                callback(600,error)
            else
                callback(response.statusCode,body)
        })
    },
    del:(productId,pictureId,token, callback) => {
        var param = {
            productId:productId,
            pictureId: pictureId
        }
        postJson(api.picture.del, param,token, callback)
    },
    get:(productId,pictureId,token,callback)=>{
        var param = {
            productId:productId,
            pictureId: pictureId
        }
        postJson(api.picture.get, param,token,callback)
    }
}




