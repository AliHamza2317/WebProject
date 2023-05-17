
const tour=require("../Models/tourSchema")


const addtour = (req, res) => {
    const { tour_id, tour_name, description, destination, price, departure_date, duration_days } = req.body;
  
    tour.findOne({ tour_id: tour_id })
      .then(existingTour => {
        if (existingTour) {
          res.status(400).send({
            status: "FAILED",
            message: "Tour ID already exists. Please choose a different ID."
          });
        } else {
          const newTour = new tour({ tour_id, tour_name, description, destination, price, departure_date, duration_days });
          newTour.save()
            .then(() => res.status(200).send({
              status: "SUCCESS",
              message: "Tour added successfully."
            }))
            .catch(err => res.status(500).send({
              status: "FAILED",
              message: "Tour not added. Error: " + err.message
            }));
        }
      })
      .catch(err => res.status(500).send({
        status: "FAILED",
        message: "Error checking tour ID. " + err.message
      }));
  };
  


const viewtour=async(req,res)=>{
    try {
    
      const tours = await tour.find();
  
      res.send(tours);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
    
  }


  const deletetour = (req, res) => {
    const tour_id= req.params.id;
  
    tour.findOneAndDelete({ tour_id: tour_id })
      .then(deletedTour => {
        if (!deletedTour) {
          
          res.status(404).send({
            status: "FAILED",
            message: "Tour not found. Cannot delete non-existent tour."
          });
        } else {
          res.status(200).send({
            status: "SUCCESS",
            message: "Tour deleted successfully."
          });
        }
      })
      .catch(err => res.status(500).send({
        status: "FAILED",
        message: "Error deleting tour. " + err.message
      }));
  };
  


const updateTour = (req, res) => {
    const tour_id=req.params.id;
    const {tour_name, description, destination, price, departure_date, duration_days } = req.body;
  
    tour.findOne({ tour_id: tour_id })
      .then(existingTour => {
        if (!existingTour) {
          res.status(404).send({
            status: "FAILED",
            message: "Tour not found. Cannot update non-existent tour."
          });
        } else {
          existingTour.tour_name = tour_name;
          existingTour.description = description;
          existingTour.destination = destination;
          existingTour.price = price;
          existingTour.departure_date = departure_date;
          existingTour.duration_days = duration_days;
  
          existingTour.save()
            .then(() => res.status(200).send({
              status: "SUCCESS",
              message: "Tour updated successfully."
            }))
            .catch(err => res.status(500).send({
              status: "FAILED",
              message: "Error updating tour. " + err.message
            }));
        }
      })
      .catch(err => res.status(500).send({
        status: "FAILED",
        message: "Error checking tour ID. " + err.message
      }));
  };
 
  


module.exports={
    addtour,
    viewtour,
    deletetour,
    updateTour
}




