# JustFold Mobile - Coding Standards

## Overview
This document defines the coding standards for the JustFold Mobile React Native application. These standards ensure consistency, maintainability, and align with JavaScript/TypeScript community best practices.

## General Formatting

### Indentation
- Use 2 spaces for indentation (never tabs)
- Maintain consistent indentation throughout files
- Align nested structures for readability

### File Organization
```typescript
// 1. Imports (grouped and ordered)
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// External libraries
import { useQuery } from '@tanstack/react-query';
import { router } from 'expo-router';

// Internal imports
import { useAuth } from '@/hooks/useAuth';
import { IconSymbol } from '@/components/ui/IconSymbol';

// Types/Interfaces
import type { Order } from '@/types/order';

// 2. Types/Interfaces
interface ComponentProps {
  // ...
}

// 3. Component
export default function Component() {
  // ...
}

// 4. Styles
const styles = StyleSheet.create({
  // ...
});
```

## Naming Conventions

### Variables and Functions
- Use **camelCase** for variables and functions
- Use descriptive names that convey purpose
- Boolean variables should start with `is`, `has`, `should`, etc.

```typescript
// ✅ Good
const userName = 'John Doe';
const isLoading = true;
const hasPermission = false;
const shouldRefresh = true;

function calculateTotalPrice(items: Item[]) {
  // ...
}

// ❌ Bad
const user_name = 'John Doe';
const loading = true;
const permission = false;
```

### Components and Classes
- Use **PascalCase** for React components and classes
- Component files should match the component name

```typescript
// ✅ Good
export default function OrderDetailsScreen() { }
export function OrderCard() { }
class PaymentService { }

// ❌ Bad
export default function orderDetailsScreen() { }
export function order_card() { }
```

### Constants
- Use **UPPER_SNAKE_CASE** for true constants
- Use object literals for grouped constants

```typescript
// ✅ Good
const MAX_RETRY_COUNT = 3;
const API_TIMEOUT = 30000;

const ORDER_STATUS = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  DELIVERED: 'delivered',
} as const;

// ❌ Bad
const maxRetryCount = 3;
const apiTimeout = 30000;
```

### Types and Interfaces
- Use **PascalCase** for types and interfaces
- Prefix interfaces with 'I' only if it helps clarity (optional)
- Use descriptive names

```typescript
// ✅ Good
interface User {
  id: string;
  email: string;
}

type OrderStatus = 'pending' | 'accepted' | 'delivered';

interface OrderFormData {
  pickupAddress: string;
  deliveryDate: Date;
}
```

## String Formatting

### String Literals
- Use **single quotes** for simple strings
- Use **template literals** for string interpolation
- Use template literals for multi-line strings

```typescript
// ✅ Good
const message = 'Hello World';
const greeting = `Welcome, ${userName}!`;
const multiline = `
  This is a
  multi-line string
`;

// ❌ Bad
const message = "Hello World";
const greeting = 'Welcome, ' + userName + '!';
```

### Object Keys
- Quote object keys only when necessary

```typescript
// ✅ Good
const config = {
  apiUrl: 'https://api.justfold.app',
  timeout: 5000,
  'content-type': 'application/json', // Required quotes
};

// ❌ Bad
const config = {
  'apiUrl': 'https://api.justfold.app',
  'timeout': 5000,
};
```

## TypeScript Specific

### Type Annotations
- Always use explicit return types for functions
- Use type inference where obvious
- Prefer interfaces over type aliases for objects

```typescript
// ✅ Good
function calculatePrice(weight: number): number {
  return weight * PRICE_PER_POUND;
}

const orders = useState<Order[]>([]); // When type isn't obvious

interface UserProfile {
  name: string;
  email: string;
}

// ❌ Bad
function calculatePrice(weight) { // Missing types
  return weight * PRICE_PER_POUND;
}
```

### Null/Undefined Handling
- Use optional chaining (?.) and nullish coalescing (??)
- Avoid non-null assertions (!) unless absolutely necessary

```typescript
// ✅ Good
const userName = user?.profile?.name ?? 'Guest';
const orderCount = orders?.length ?? 0;

// ❌ Bad
const userName = user!.profile!.name;
const orderCount = orders ? orders.length : 0;
```

## React Native Specific

### Component Structure
```typescript
// ✅ Good - Functional components with hooks
export default function OrderScreen() {
  // 1. Hooks
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  
  // 2. Queries/Mutations
  const { data, error } = useQuery({...});
  
  // 3. Event handlers
  const handleSubmit = useCallback(() => {
    // ...
  }, []);
  
  // 4. Effects
  useEffect(() => {
    // ...
  }, []);
  
  // 5. Render
  return (
    <View style={styles.container}>
      {/* ... */}
    </View>
  );
}
```

### Styling
- Use `StyleSheet.create()` for performance
- Keep styles at the bottom of the file
- Use descriptive style names

```typescript
// ✅ Good
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
});

// ❌ Bad - Inline styles
<View style={{ flex: 1, padding: 16 }}>
```

### Props
- Destructure props for clarity
- Use TypeScript interfaces for prop types

```typescript
// ✅ Good
interface OrderCardProps {
  order: Order;
  onPress?: () => void;
  showDetails?: boolean;
}

export function OrderCard({ order, onPress, showDetails = false }: OrderCardProps) {
  // ...
}

// ❌ Bad
export function OrderCard(props: any) {
  const order = props.order;
  // ...
}
```

## Async/Await

### Error Handling
- Always use try-catch for async operations
- Handle errors appropriately

```typescript
// ✅ Good
const fetchOrders = async (): Promise<Order[]> => {
  try {
    setLoading(true);
    const response = await apiClient.get('/orders');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch orders:', error);
    showErrorToast('Failed to load orders');
    return [];
  } finally {
    setLoading(false);
  }
};

// ❌ Bad
const fetchOrders = async () => {
  const response = await apiClient.get('/orders');
  return response.data;
};
```

## Code Comments

### When to Comment
- Add brief comments above complex business logic
- Document non-obvious implementation choices
- Explain the "why", not the "what"
- Use JSDoc for public APIs

```typescript
// ✅ Good
/**
 * Calculates the final price including all fees and taxes
 * @param basePrice - Base price in dollars
 * @param weight - Weight in pounds
 * @returns Final price with all fees included
 */
function calculateFinalPrice(basePrice: number, weight: number): number {
  // Apply surge pricing during peak hours (5-8 PM)
  const currentHour = new Date().getHours();
  const surgeFactor = (currentHour >= 17 && currentHour <= 20) ? 1.2 : 1.0;
  
  return basePrice * weight * surgeFactor;
}

// ❌ Bad
// This function calculates price
function calculatePrice(p: number, w: number): number {
  // Multiply price by weight
  return p * w;
}
```

### TODO Comments
- Use TODO comments for pending work
- Include your name and date
- Be specific about what needs to be done

```typescript
// ✅ Good
// TODO: Implement retry logic for failed payment attempts
// TODO: Add loading state while processing payment

// ❌ Bad
// TODO: Fix this
// TODO: Improve later
```

## API and Data

### API Calls
- Use consistent error handling
- Type API responses
- Use proper HTTP methods

```typescript
// ✅ Good
interface OrdersResponse {
  orders: Order[];
  total: number;
}

const fetchOrders = async (): Promise<OrdersResponse> => {
  const response = await apiClient.get<OrdersResponse>('/api/orders');
  return response.data;
};

// ❌ Bad
const fetchOrders = async () => {
  const response = await fetch('/api/orders');
  return response.json();
};
```

### State Management
- Use React Query for server state
- Use React state for UI state
- Keep state as close to where it's used as possible

```typescript
// ✅ Good - React Query for server state
const { data: orders, isLoading } = useQuery({
  queryKey: ['orders', userId],
  queryFn: fetchOrders,
  staleTime: 5 * 60 * 1000, // 5 minutes
});

// ✅ Good - Local state for UI
const [isModalVisible, setIsModalVisible] = useState(false);
```

## Testing

### Test File Naming
- Test files should be colocated with source files
- Use `.test.ts` or `.test.tsx` suffix

```
components/
  OrderCard.tsx
  OrderCard.test.tsx
```

### Test Structure
```typescript
describe('OrderCard', () => {
  it('should display order details', () => {
    // Arrange
    const mockOrder = { id: '1', status: 'pending' };
    
    // Act
    const { getByText } = render(<OrderCard order={mockOrder} />);
    
    // Assert
    expect(getByText('Pending')).toBeTruthy();
  });
});
```

## Git Commit Messages

### Format
```
type(scope): subject

body (optional)

footer (optional)
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code changes that neither fix bugs nor add features
- `test`: Adding or updating tests
- `chore`: Changes to build process or auxiliary tools

### Examples
```
feat(orders): add order cancellation functionality

fix(auth): resolve token refresh race condition

style(dashboard): update formatting to match coding standards
```

## ESLint and Prettier Configuration

### Recommended .eslintrc.js
```javascript
module.exports = {
  extends: [
    'expo',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
};
```

### Recommended .prettierrc
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

## Migration Guide

To migrate existing code to these standards:

1. **Install ESLint and Prettier**:
   ```bash
   npm install --save-dev eslint prettier eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
   ```

2. **Run Prettier to fix formatting**:
   ```bash
   npx prettier --write "**/*.{ts,tsx,js,jsx}"
   ```

3. **Fix ESLint issues**:
   ```bash
   npx eslint . --ext .ts,.tsx,.js,.jsx --fix
   ```

4. **Manual fixes**:
   - Update string quotes to single quotes
   - Add missing TypeScript types
   - Improve variable naming for clarity
   - Add missing error handling

## Enforcement

1. **Pre-commit hooks**: Use Husky to run linting before commits
2. **CI/CD**: Run linting and type checking in CI pipeline
3. **Code reviews**: Enforce standards during PR reviews
4. **IDE setup**: Configure VS Code with ESLint and Prettier extensions

---

These standards are designed specifically for the JustFold Mobile React Native project and align with JavaScript/TypeScript community best practices while maintaining consistency with the React Native ecosystem.