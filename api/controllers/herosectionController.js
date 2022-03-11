import express from 'express';
import mongoose from 'mongoose';

import HeroSection from '../models/heroSection.js';
import ServiceSection from '../models/serviceSchema.js';
import ClientSec from '../models/clientsecSchema.js';
import PartenaireSec from '../models/partenaireSchema.js';
import ContactSec from '../models/contactSchema.js';
import ClientS from '../models/clientsSchema.js';

const router = express.Router();

export const getHeroSection = async (req, res) => {
  try {
    const heroSection = await HeroSection.find();

    res.status(200).json(heroSection);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getService = async (req, res) => {
  try {
    const serviceData = await ServiceSection.find();

    res.status(200).json(serviceData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getClientSec = async (req, res) => {
  try {
    const clientsecData = await ClientSec.find();

    res.status(200).json(clientsecData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPartenaires = async (req, res) => {
  try {
    const parteniaresecData = await PartenaireSec.find();

    res.status(200).json(parteniaresecData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getContact = async (req, res) => {
  try {
    const contactData = await ContactSec.find();

    res.status(200).json(contactData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getClients = async (req, res) => {
  try {
    const clientsData = await ClientS.find();

    res.status(200).json(clientsData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
