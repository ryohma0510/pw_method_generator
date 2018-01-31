class PasswordsController < ApplicationController
  def new

  end

  def pdf
    binding.pry
    render pdf: 'pdf',
           layout: 'pdflayouts.html.slim',
           template: '/passwords/pdf.html.slim',
           encording: 'UTF-8'
  end         
end
