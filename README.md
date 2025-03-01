# Prisma Setup Guide

## Installation and Configuration

1. **Install Prisma**
   ```bash
   npm install prisma --save-dev
   ```

2. **Initialize Prisma**
   ```bash
   npx prisma init
   ```
   This will create your initial schema and .env file

3. **Deploy Database Schema**
   ```bash
   npx prisma db push
   ```
   This command will sync your Prisma schema with your database
   
4. **Studio**
   ```bash
   npx prisma studio
   ```
   This command opens UI DTB