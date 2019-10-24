const mysql = require("mysql");
const { promisify } = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "JWS"
});


//test
//promisify the connection
const promisifyQuery = promisify(connection.query).bind(connection);

const runQuery = async (id) => {
  const queryString = `SELECT id, bookingDate, bookingTime FROM users WHERE users.id = ${id}`;
  try {
    // wait for the promise to be handled before trying to return the data
    let data = await promisifyQuery(queryString);
    console.log(data)
    return data;
  } catch (error) {
    console.log(error.sqlMessage);
  }
  
};

const addEmail = async content => {
    // const  { email, password,
    //     firstName, lastName, houseNo, address, city, postcode, phoneNumber,
    //     windowType, bookingDate, bookingTime } = content
    console.log(content)
  try {

    //escape sql queries to avoid possible injection.
    const surveyor = Math.ceil(Math.random() *4)
    content.surveyorID = surveyor
    const queryStringAdd = "INSERT INTO users SET ?"
    let data = await promisifyQuery(queryStringAdd, content );
    return data;
  } catch (error) {
    console.log(error.sqlMessage);
  }
  
};

const editInfo = async content => {
  const {bookingDate, bookingTime, id } = content
  console.log(id)
 try {
  const queryStringEdit = `UPDATE users SET ? WHERE users.id = ${id}`
  let data = await promisifyQuery(queryStringEdit, content);
  console.log(data)
  return data;
 } catch (error) {
   console.log(error.sqlMessage)
 }
 
}

const surveyInfo = async content => {
  // const {windowType, windowSize, windowsNo, usersID, surveyorID } = content
  
 try {
  const queryStringEdit = `INSERT into survey SET ?`
  let data = await promisifyQuery(queryStringEdit, content);
  console.log(data)
  return data;
 } catch (error) {
   console.log(error.sqlMessage)
 }
 
}

const cancelBooking = async content => {
  const { id } = content
  try {
    const queryStringCancel = `UPDATE users SET bookingDate = null, bookingTime = null  WHERE users.id = ${id}`
    let data = await promisifyQuery(queryStringCancel);
    return data
  } catch (error) {
    console.log(error.sqlMessage)
  }
  
}

const query = async (email, password) => {
    try {
       let data = await promisifyQuery (`


            SELECT 
                users.id
            FROM
                users
                    
            WHERE
                email = '${email}' AND password = '${password}'`
        )
        console.log(data)
        
        return ( 
            {
                id: data[0].id,
            })
        
        
    } catch (error) {
        console.log(error)
    }
}

const adminQuery = async (email, password) => {
  try {
     let data = await promisifyQuery (`


          SELECT 
              admin.id
          FROM
              admin
                  
          WHERE
              email = '${email}' AND password = '${password}'`
      )
      console.log(data)
      
      return ( 
          {
              id: data[0].id,
          })
      
      
  } catch (error) {
      console.log(error)
  }
  
}

const surveyorQuery = async (email, password) => {
  try {
     let data = await promisifyQuery (`


          SELECT 
              surveyor.id
          FROM
              surveyor
                  
          WHERE
              email = '${email}' AND password = '${password}'`
      )
      console.log(data)
      
      return ( 
          {
              id: data[0].id,
          })
      
      
  } catch (error) {
      console.log(error)
  }
  
}

const adminInfo = async () => {
  const queryString = `SELECT email, firstName, lastName, houseNo, address, city, postcode, phoneNumber, windowType, bookingDate, bookingTime, surveyorID, id from USERS ORDER BY bookingDate`
  try {
    // wait for the promise to be handled before trying to return the data
    let data = await promisifyQuery(queryString);
    console.log(data)
    return data;
  } catch (error) {
    console.log(error.sqlMessage);
  }
  
};

const surveyorInfo = async (id) => {
  const queryString = `SELECT email, firstName, lastName, houseNo, address, city, postcode, phoneNumber, windowType, bookingDate, bookingTime, id FROM users WHERE surveyorID = ${id} ORDER BY bookingDate`
  try {
    // wait for the promise to be handled before trying to return the data
    let data = await promisifyQuery(queryString);
    console.log(data)
    return data;
  } catch (error) {
    console.log(error.sqlMessage);
  }
  
};

module.exports = {
  runQuery,
  addEmail,
  query,
  editInfo,
  cancelBooking,
  adminQuery,
  adminInfo,
  surveyorQuery,
  surveyorInfo,
  surveyInfo
};