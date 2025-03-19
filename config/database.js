const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Configurações do Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Criar cliente Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;