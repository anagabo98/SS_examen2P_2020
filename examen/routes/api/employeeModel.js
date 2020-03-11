var ObjectID = require('mongodb').ObjectID;

function employeeModel(db){


  var lib = {};
  var empColl = db.collection('employees');

  lib.getEmployees = (handler)=>{
    exasCollection.find({}).toArray(
      (err, docs)=>{
        if(err)
        {
          console.log(err);
          handler(err, null);
        }
        return handler(null, docs);
      }
    );
    return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesById = (id, handler) => {
    var query = {"_id": new ObjectId(id)};
      exasCollection.deleteOne(query, (err, rslt)=>{
          if(err)
          {
            console.log(err);
            handler(err, null);
          }
          return handler(null, rslt);
      })
    
      return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByCompany = (company, handler) => {
  

    // implementar
    // solo mostrar name, email, company
    return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByTag = (tag, handler) => {
    var curatedTags = Array.isArray(tags)? tags: [tags];
    var updateObject = { "$set": { "tags": curatedTags}};
    empColl.updateOne(id, (err, rsult)=>{
      if(err){
        handler(err, null);
      }else{
        handler(null, rsult.result);
      }
  } );
    return handler(new Error("No Implementado"), null);
  }

  lib.addEmployeeATag = ( tag, id, handler) => {
    var curatedTags = Array.isArray(tags)? tags: [tags];
        var updateObject = { "$set": { "tags": curatedTags}};   //-------"tags" representa el valor a cambiar
        empColl.updateOne({"_id": ObjectId(id)}, updateObject, (err, rsult)=>{
            if(err){
              handler(err, null);
            }else{
              handler(null, rsult.result);
            }
        } );

    return handler(new Error("No Implementado"), null);
  }

  lib.removeEmployee = (id, handler) => {
    empColl.deleteOne({"_id": ObjectId(Id)}, (err, rslt)=>{
      if(err){
        console.log(err);
        handler(err, null);
      } else {
        handler(null, rslt.result);
      }
    });
  return handler(new Error("No Implementado"), null);
  }

  lib.increaseAgeToAll = (ageDelta, handler) => {
    
    return handler(new Error("No Implementado"), null);
  }
  return lib;
}

module.exports = employeeModel;
