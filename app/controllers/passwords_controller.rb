class PasswordsController < ApplicationController
  def new

  end

  def pdf
    @pw_comp = pw_comp
    @pw_comp_condition = pw_comp_condition
    @pw_method = pw_method
    @pw_method_condition = pw_method_condition
    render pdf: 'pdf',
           layout: 'pdflayouts.html.slim',
           template: '/passwords/pdf.html.slim',
           encording: 'UTF-8'
  end

  private

  def pw_comp
    return params.require(:pw_comp).permit!
  end

  def pw_comp_condition
    return params.require(:pw_comp_condition).permit!
  end

  def pw_method
    return params.require(:pw_method).permit!
  end

  def pw_method_condition
    return params.require(:pw_method_condition).permit!
  end
end
