import { getUsersData } from "../utils/getData.js";
import fs from 'node:fs/promises'
import { pathToResource } from "../utils/getData.js";
import validator from 'validator';

const pathToUsersData = pathToResource('users.json')


export const getAllUsers = async (req, res) => {
  try {
    const users = await getUsersData()
    const { name, username, email, company, city, street } = req.query
    let filteredData = users
    if (name) {
      filteredData = filteredData.filter((user) => user?.name?.toLowerCase().includes(name.toLowerCase().trim()))
    }
    if (username) {
      filteredData = filteredData.filter((user) => user?.username?.toLowerCase().includes(username.toLowerCase().trim()))
    }
    if (email) {
      filteredData = filteredData.filter((user) => user?.email?.toLowerCase().includes(email.toLowerCase().trim()))
    }
     if (company) {
      filteredData = filteredData.filter((user) => user?.company?.toLowerCase().includes(company.toLowerCase().trim()))
    }
     if (city) {
      filteredData = filteredData.filter((user) => user?.address?.city.toLowerCase().includes(city.toLowerCase().trim()))
    }
    if (street) {
      filteredData = filteredData.filter((user) => user?.address?.street.toLowerCase().includes(street.toLowerCase().trim()))
    }
    res.status(200).json({success: true, data: filteredData || []})
  } catch (error) {
    console.log(error.message)
    res.status(500).json({error: error.message})
  }
}

export const getUserById = async(req, res) => {
  try {
    const id = Number(req.params.id)
    if (isNaN(id)) {
  return res.status(400).json({ success: false, error: "id must be a number" });
}
    const users = await getUsersData()
    const foundUser = users.find((u) => u.id === id)
    if (!foundUser) return res.status(404).json({ success: false, error: 'user not found!' })
    res.status(200).json({success: true, data: foundUser})
  } catch (error) {
    res.status(500).json({ error: error.message })
    console.log(error)
  }
}

export const createNewUser = async (req, res) => {
  try {
    let { name, username, email, phone, address, company } = req.body
    if (!name || !email || !phone || !company || !username) {
      return res.status(400).json({success: false, error: 'All fields are required'})
    }
    const isValidEmail = validator.isEmail(email); 
    if (!isValidEmail) {
      return res.status(400).json({success: false, error: 'Provide a valid email format'})
    }
    email = email.trim()
    username = username.trim()
    phone = phone.trim()
    company = company.trim()
    name = name.trim()
    const users = await getUsersData()
    const newUser = {
      id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1,
      name,
      email,
      username,
      phone,
      company,
      address: {
        street: address?.street || "",
  city: address?.city || "",
  zip: address?.zip || "",
  country: address?.country || ""
      },
      createdAt: new Date().toISOString()
    }
    users.push(newUser)
    await fs.writeFile(pathToUsersData, JSON.stringify(users, null, 2), 'utf8')
    res.status(201).json({success: true, data: newUser, message: 'user created successfully!'})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

export const partialUserUpdate = async (req, res) => {
  try {
    const id = Number(req.params.id);
     if (isNaN(id)) {
  return res.status(400).json({ success: false, error: "id must be a number" });
}
    const { name, username, email,phone, address, company } = req.body;
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        error: "No fields provided to update",
      });
    }
    if (email) {
       const isValidEmail = validator.isEmail(email); 
    if (!isValidEmail) {
      return res.status(400).json({success: false, error: 'Provide a valid email format'})
    }
    }
    const users = await getUsersData();
    const foundUser = users.find((u) => u.id === id);
    if (!foundUser) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    const updatedUser = {
      id: foundUser.id,
      name: name ? name.trim() : foundUser.name,
      username: username ? username.trim() : foundUser.username,
      email: email ? email.trim() : foundUser.email,
      phone: phone ? phone.trim() : foundUser.phone,
      company: company ? company.trim() : foundUser.company,
      address: {
        street: address ? address?.street.trim() : foundUser?.address?.street,
        city: address ? address?.city.trim() : foundUser?.address?.city,
        zip: address ? address?.zip.trim() : foundUser?.address?.zip,
        country: address ? address?.country.trim() : foundUser?.address?.country,
      },
      createdAt: foundUser.createdAt
    };
    const foundIndex = users.findIndex((u) => u.id === id);
    users[foundIndex] = updatedUser;
    await fs.writeFile(pathToUsersData, JSON.stringify(users, null, 2), "utf8");
    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = Number(req.params.id);
     if (isNaN(id)) {
  return res.status(400).json({ success: false, error: "id must be a number" });
    }
    let { name, username, email, phone, address, company } = req.body
    if (!name || !email || !phone || !company || !username || !address.city || !address.country || !address.zip || !address.street) {
      return res.status(400).json({success: false, error: 'All fields are required'})
    }
     const isValidEmail = validator.isEmail(email); 
    if (!isValidEmail) {
      return res.status(400).json({success: false, error: 'Provide a valid email format'})
    }
    const users = await getUsersData();
    const foundUser = users.find((u) => u.id === id);
    if (!foundUser)
      return res.status(404).json({ success: false, error: "User not found!" });

    const updatedUser = {
      id: foundUser.id,
      name: name.trim(),
      username: username.trim(),
      email: email.trim(),
      phone: phone.trim(),
      company: company.trim(),
      address: {
        street: address.street.trim(),
        city: address.city.trim(),
        zip: address.zip.trim(),
        country: address.country.trim(),
      },
      createdAt: foundUser.createdAt
    };
    const index = users.findIndex((u) => u.id === id)
    users[index] = updatedUser
    await fs.writeFile(pathToUsersData, JSON.stringify(users, null, 2), "utf8");
    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
   try {
     const id = Number(req.params.id)
     if (isNaN(id)) return res.status(400).json({ success: false, error: 'id must be a number' })
     const users = await getUsersData()
     const foundUser = users.find((u) => u.id === id)
     if (!foundUser)
       return res.status(404).json({ success: false, error: "User not found!" });
     const updatedUsers = users.filter((u) => u.id !== foundUser.id)
     await fs.writeFile(pathToUsersData, JSON.stringify(updatedUsers, null, 2), "utf8");
    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: foundUser,
    });
   } catch (error) {
    res.status(500).json({ error: error.message });
   }
}