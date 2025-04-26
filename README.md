
# Rental Homes Management System
A web-based platform for managing rental properties, tenants, leases, and payments.

## Features

### API Endpoints

## For Tenants:
**POST** /tenants/requests: Create a new rental request for a house.
**GET** /tenants/requests: Retrieve all rental requests submitted by the tenant.
**PUT** /tenants/profile: Update tenant profile

## For Admin
**GET** /admin/users: Retrieve all user(tenants, landlords) accounts.
**PUT** /admin/users/:id: Update user roles.
**DELETE** /admin/user/:id: Delete user.
**GET** /admin/listings: Retrieve all rental house listings.
**PUT** /admin/listings/:id: Update or moderate a rental listing.
**DELETE** /admin/listings/:id: Remove a rental listing if necessary.

## For Landlord
**POST** /landlords/listings: Create a new rental house listing.
**GET** /landlords/listings: Retrieve all rental listings posted by the landlord.
**PUT** /landlords/listings/:id: Update a specific rental listing.
**DELETE** /landlords/listings/:id: Remove a rental listing.
**GET** /landlords/requests: Retrieve all rental requests for the listings posted by the landlord.
**PUT** /landlords/requests/:id:

# 🛠️ Technology Use
* Node.js
* Express.js
* Mongoose
* TypeScript
## Package Management:
* npm install

## Demo

https://rental-home-management-server.vercel.app/

