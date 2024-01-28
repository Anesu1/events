//http requests
import axios from "axios";
const API_URL = "http://localhost:8000/events";

const user = await localStorage.getItem("user");
const change = JSON.parse(user);

const getEvents = async () => {
  

  const response = await axios.get(`${API_URL}/`, {
    headers: {
      Authorization: change.token,
    },
  });
  console.log(response.data);
  return response.data;
};

// Create an event
const addEvent = async (eventData) => {
  const response = await axios.post(`${API_URL}/add`, eventData, {
    headers: {
      Authorization: change.token,
    },
  });
  return response.data;
};


// Update an event
const updateEvent = async (eventData) => {
  const response = await axios.post(`${API_URL}/update/${eventData.eventId}`, eventData, {
    headers: {
      Authorization: change.token,
    },
  });
  return response.data;
};


// Delete an event
const deleteEvent = async (eventData) => {
  const response = await axios.post(`${API_URL}/delete/${eventData.eventId}`, eventData, {
    headers: {
      Authorization: change.token,
    },
  });
  return response.data;
};




const eventService = {
  addEvent,
  updateEvent,
  deleteEvent,
  getEvents,
};

export default eventService;
