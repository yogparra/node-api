
const sql       = require("mssql");
const msginfo   = require('../../messages/info');

const getUserByUserName = (userRut) => {
    if (!userRut)
      return Promise.reject(new Error(msginfo.INFO.VALIDACION_DATOS_REQUERIDOS));
  
    const sqlUsuario =

                      "SELECT                         "+
                      "P.IDO_ID AS IdPersona,         "+ 
                      "P.PER_RUT AS RutPersona,       "+ 
                      "P.PER_DIG AS DigPersona        "+
                      "FROM PERSONA P                 "+
                      "WHERE P.PER_RUT = @userRut";
                        
    return new Promise((resolve, reject) => {
      new sql.Request()
              .input('userRut', sql.VarChar(10), userRut)
              .query(sqlUsuario)              
              .then((result) => {
                resolve(                    
                      result.recordset.map((item, index) => ({               
                        IdPersona: item.IdPersona,
                        RutPersona: item.RutPersona,
                        DigPersona: item.DigPersona
                      })))
              })
              .catch((err) => {                  
                reject(err);
              })
    });
  };

  exports.getUserByUserName = getUserByUserName;