export interface IBilletContent {
  amount: string;
  barCode: string;
  expirationDate: string;
}

export interface ITitleBilletData {
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

export interface IDealershipBilletData {
  dealership_code: string;
  service_id: string;
  reference_id: string;
  main_dv: string;
  value: string;
  company_id?: string;
  company_document?: string;
  custom_field: string;
}
