const Product = require('./model');

// const getCompanyById = async (companyId) => {
//   try {
//     const company = await Company.findById(companyId)
//       .populate({
//         path: 'servicesCategory',
//         populate: {
//           path: 'services',
//           model: 'Service',
//         }
//       });

//     if (!company) {
//       throw new Error('Company not found');
//     }

//     return company;
//   } catch (error) {
//     console.error('Error finding company:', error);
//     throw error;
//   }
// }

const addProduct = async (data) => {
    try {
        const info = await Product.create(data);
        return info;
    } catch (error) {
        console.error('Error creating company:', error);
        throw error;
    }
};

// const addNewServiceCategoryToCompany = async (idCompany, idCategory, options = {}) => {
//   try {
//     const updatedCompany = await Company.findByIdAndUpdate(idCompany, { $push: { servicesCategory: idCategory } }, { new: true, session: options.session });
//     if (!updatedCompany) {
//       throw new Error('Company not found or could not be updated');
//     }
//     return updatedCompany;
//   } catch (error) {
//     throw new Error('Error creating Company: ' + error.message);
//   }
// };



// const update = async (data) => {
//   const info = await Model.Company.findOne({ where: { id: data.id } });
//   info.nit = data.nit;
//   info.name = data.name;
//   info.country = data.country;
//   info.region = data.region;
//   info.city = data.city;
//   info.address = data.address;
//   info.postal_code = data.postal_code;
//   info.status = data.status;
//   await info.save();
//   return info;
// };


// const deleteElement = async (id) => {
//   const users = await ModelUser.User.findAll({ where: { company_id: id } });

//   if (users) {
//     for (const user of users) {
//       await user.destroy();
//     }
//   }
//   const info = await Model.Company.findOne({ where: { id: id } });
//   await info.destroy();
//   return info;
// };




module.exports = {
    //   getCompanyById,
    addProduct,
    // listUser: getUsers,
    // create: create,
    // update: update,
    // delete: deleteElement,
}