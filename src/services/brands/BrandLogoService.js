const BrandLogoService = async (Request, brandLogo) => {

    try {
        let JSONData = Request.body;
        let data = await brandLogo.create(JSONData);
        console.log("Check File", data)
        return {status: "success", data: data}
    } catch (error) {
        return {status: "Failed", data: error.toString()}
    }

}


module.exports = BrandLogoService;


// //Multipart Data

