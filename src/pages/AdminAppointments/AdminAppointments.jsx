
import { CustomTableAppointmentsPending } from "../../components/CustomTableAppointments/CustomTableAppointmentsPending";

export const AdminAppointments = () => {

  return (
    <>
      <div className="admin-appoimtments section">
        <div className="container">
          <h1 className="title fontColor">Admin Appointments</h1>
        </div>
        <div>{<CustomTableAppointmentsPending />}</div>
      </div>
    </>
  );
};
