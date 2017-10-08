
USE vehicles_db;

INSERT INTO clients (client_name,business_name,address,email) VALUES ('Dean Marco','Southern Auto Group', '67 Geneva st. Ocoee FL','deanmarcoauto@aol.com');

INSERT INTO vehicles ( day_finished, vin, make, model, model_year, client_name, job, cost, paid_status,client_id) VALUES ( CURDATE(),'WBAPK5C5C52AA599960','BMW','328 xi','2010','Dean Marco','leather','789.00','not paid',(SELECT id from clients WHERE client_name='Dean Marco' ));
