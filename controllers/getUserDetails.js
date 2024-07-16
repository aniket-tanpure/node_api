import mysqlpool from "../config/db.js";

const getUserdetail = async (req, res) =>{

    try{

        const data = await mysqlpool.promise().query('SELECT * FROM user_details_master'); 
         
        if(!data){

            res.status(200).send({
                sucesss: true,
                message: 'Success'

            })
        }
        else{
            res.status(200).send({
                sucesss: true,
                message: 'Success', 
                user_details: data[0]
            })

        }
       
    }catch(error){

        res.status(401).send({
            sucesss: false, 
            message: 'Error while fetching data',
            error
        })
    }
};

export default getUserdetail