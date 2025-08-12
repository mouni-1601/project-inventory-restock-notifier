export interface Item {
  id: number;
  name: string;
  description: string;
  quantity: number;
  threshold: number;
  category: string;
  created_at: string;
  updated_at: string;
}

export interface CreateItemRequest {
  name: string;
  description: string;
  quantity: number;
  threshold: number;
  category: string;
}