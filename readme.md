## Startup Application

- Table Startup
- Attributes:
  - id SERIAL PRIMARY KEY
  - name VARCHAR NOT NULL
  - business VARCHAR NOT NULL
  - bornYear DATE NOT NULL

- Table Product
- Attributes:
  - id SERIAL PRIMARY KEY
  - name VARCHAR NOT NULL
  - totalAsset VARCHAR NOT NULL
  - type VARCHAR NOT NULL ==> (culinary, delivery, customer care)
  - onBusiness BOOLEAN DEFAULT VALUE False ==> (true, false)

Buatlah migration baru untuk menghubungkan relasi kedua table tersebut.

Make normal CRUD