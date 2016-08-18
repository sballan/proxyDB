[![Build Status](https://travis-ci.org/sballan/proxyDB.svg?branch=master)](https://travis-ci.org/sballan/proxyDB)
## ProxyDb
### Syntactic sugar for your favorite ODB/ORM

- A JavaScript framework written in ES6, ready to work as an npm module
- A database agnostic tool to standardize API calls to Object Relational/Document Mappers
- Allows for applications to be written without being tied to any particular database.
- Fully pluggable, any ODM/ORM can be configured by extending easy to use template classes.

ProxyDb is in the early stages of the development, but most of the core functionality is currently live. Feel free to submit pull requests!



## API

#### ProxyDb
- class properties:
	- `managers`
	- `strategies`
	- `connections`
	- `db`
- class functions:
	- `addStrategy`

#### Manager
- instance properties
	- `ProxyDb`
	- `strategy`
	- `config`
	- `dbManager`
	- `Model`
	- `Connection`
	- `Schema`
	- `_models`
	- `_connections`
	- `_schemas`
- instance methods
	- `model`
	- `connection`




