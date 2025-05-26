SELECT * FROM Users u
WHERE NOT EXISTS (
  SELECT 1 FROM Registrations r
  WHERE r.user_id = u.user_id
  AND DATEDIFF(CURDATE(), r.registration_date) <= 90
);
