INSERT INTO inventory
    (name, price, imgurl)
VALUES
    ($1, $2, $3);

SELECT *
FROM inventory;