SELECT date_trunc('day', Fecha) as Fecha, Nombre as 'Nombre Usuario', COUNT(idUsuario) as 'Cantidad de logins x dia'
FROM Usuarios
    INNER JOIN Logins_al_Sistema ON Usuarios.idUsuario = Logins_al_Sistema.idUsuario
WHERE Fecha >= '2015-01-01' AND FECHA < '2015-12-31'
GROUP BY idUsuario, Nombre, Fecha