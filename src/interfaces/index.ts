export interface IBilletContent {
  amount: string;
  barCode: string;
  expirationDate: string;
}

export interface IBilletData {
  bank_id: string;
  currency: string;
  first_custom_field: string;
  first_field_dv: string;
  second_custom_field: string;
  second_field_dv: string;
  third_custom_field: string;
  third_field_dv: string;
  barcode_dv: string;
  expires_factor: string;
  value: string;
}
