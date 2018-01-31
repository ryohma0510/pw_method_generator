Rails.application.routes.draw do
 root to: 'passwords#new'
 post 'passwords/pdf', to: 'passwords#pdf', as: 'pdf_download'
end
