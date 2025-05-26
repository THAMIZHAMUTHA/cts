SELECT e.city, ROUND(AVG(f.rating), 2) AS avg_rating
FROM Feedback f
JOIN Events e ON f.event_id = e.event_id
GROUP BY e.city;
