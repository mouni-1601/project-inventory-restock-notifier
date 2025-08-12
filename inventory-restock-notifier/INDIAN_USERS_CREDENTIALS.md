# Indian Users Credentials

## 👥 **Updated Users with Indian Names and Phone Numbers**

| Username | Email | Password | Phone (10 digits) | Role |
|----------|-------|----------|-------------------|------|
| rajesh_admin | rajesh@warehouse.com | **password** | 9876543210 | Admin |
| priya_manager | priya@warehouse.com | **password** | 8765432109 | Manager |
| amit_staff | amit@warehouse.com | **password** | 7654321098 | Staff |
| sneha_supervisor | sneha@warehouse.com | **password** | 9123456789 | Supervisor |
| vikram_clerk | vikram@warehouse.com | **password** | 8234567890 | Clerk |
| kavya_assistant | kavya@warehouse.com | **password** | 9345678901 | Assistant |

## 🔑 **Login Credentials**

### **Primary Admin**
- **Email**: rajesh@warehouse.com
- **Password**: password
- **Phone**: 9876543210

### **Manager**
- **Email**: priya@warehouse.com
- **Password**: password
- **Phone**: 8765432109

### **Staff Members**
- **Email**: amit@warehouse.com
- **Password**: password
- **Phone**: 7654321098

### **Supervisor**
- **Email**: sneha@warehouse.com
- **Password**: password
- **Phone**: 9123456789

### **Clerk**
- **Email**: vikram@warehouse.com
- **Password**: password
- **Phone**: 8234567890

### **Assistant**
- **Email**: kavya@warehouse.com
- **Password**: password
- **Phone**: 9345678901

## 📱 **Phone Number Format**
- All phone numbers are 10 digits (Indian format)
- No country code prefix
- Valid Indian mobile numbers starting with 7, 8, or 9

## 🔄 **To Apply Changes**

### **Method 1: Fresh Database Setup**
```bash
psql -U postgres -f database/setup.sql
```

### **Method 2: Update Existing Database**
```bash
psql -U postgres -d inventory_db -f database/test-data.sql
```

### **Method 3: Manual Update**
```sql
-- Delete existing users
DELETE FROM users;

-- Insert new Indian users
\i database/test-data.sql
```

## ✅ **Verification**
After updating, verify users in database:
```sql
SELECT username, email, phone FROM users;
```

All users can now login with their respective email addresses and the password "password".